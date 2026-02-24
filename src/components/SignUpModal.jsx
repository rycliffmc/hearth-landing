import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { X, Loader } from 'lucide-react';

const disposableEmailDomains = [
    'slclogin.com', 'tempmail.com', 'guerrillamail.com', '10minutemail.com',
    'throwaway.email', 'mailinator.com', 'maildrop.cc', 'trashmail.com',
    'temp-mail.org', 'yopmail.com'
];

export default function SignUpModal({ onClose }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState(''); // Honeypot
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        gsap.fromTo('.signup-modal-bg', { opacity: 0 }, { opacity: 1, duration: 0.3 });
        gsap.fromTo('.signup-modal-content',
            { y: '50px', opacity: 0, scale: 0.95 },
            { y: '0px', opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
        );
        return () => { document.body.style.overflow = ''; };
    }, []);

    const handleClose = () => {
        gsap.to('.signup-modal-bg', { opacity: 0, duration: 0.3 });
        gsap.to('.signup-modal-content', {
            y: '50px', opacity: 0, scale: 0.95, duration: 0.4, ease: 'power3.in',
            onComplete: onClose
        });
    };

    const isDisposableEmail = (email) => {
        const domain = email.split('@')[1]?.toLowerCase();
        return disposableEmailDomains.includes(domain);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (website) {
            // Honeypot caught
            setIsSuccess(true);
            setName(''); setEmail(''); setWebsite('');
            setTimeout(() => handleClose(), 4000);
            return;
        }

        if (isDisposableEmail(email)) {
            setMessage({ text: '❌ Please use a valid email address.', type: 'error' });
            return;
        }

        setIsSubmitting(true);
        setMessage({ text: '', type: '' });

        try {
            const formData = new URLSearchParams();
            formData.append('name', name);
            formData.append('email', email);

            const response = await fetch('https://script.google.com/macros/s/AKfycbw3wFcWHbh6JLE--82sNnQ_ga9XEfnfHrwmgO61OJUy9DV2P4Mbjae471XbFQ5eyNGDWw/exec', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();

            if (result.result === 'success') {
                setIsSuccess(true);
                setName(''); setEmail('');
                // Close automatically after success
                setTimeout(() => handleClose(), 4000);
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            console.error(error);
            setMessage({ text: '❌ Something went wrong. Please try again.', type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
            <div className="signup-modal-bg absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose}></div>
            <div className="signup-modal-content relative w-full max-w-[480px] bg-[var(--bg-color)] rounded-[32px] border border-white/10 shadow-2xl p-8 sm:p-10 flex flex-col items-center text-center">

                <button onClick={handleClose} aria-label="Close" className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 text-[var(--text-muted)] hover:text-white flex items-center justify-center hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hearth-orange z-10">
                    <X size={18} />
                </button>

                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-6 w-full animate-[fadeIn_0.5s_ease-out_forwards]">
                        <div className="text-6xl mb-6 drop-shadow-2xl translate-y-[-10px]">🎉</div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                            You're <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">In!</span>
                        </h2>
                        <p className="text-[16px] text-[var(--text-muted)] font-medium leading-relaxed max-w-[90%] mx-auto">
                            Thanks for joining! We'll notify you as soon as Hearth launches.
                        </p>
                    </div>
                ) : (
                    <>
                        <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                            Join the <span className="text-hearth-orange">Waitlist</span>
                        </h2>

                        <p className="text-[16px] text-[var(--text-muted)] mb-8 max-w-[90%] font-medium">
                            Be the first to know when Hearth launches. Get exclusive early access.
                        </p>

                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                            <div className="w-full">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full px-5 py-4 bg-[#1C1C1E] border border-white/10 rounded-xl text-white placeholder-[var(--text-muted)] font-medium focus:outline-none focus:border-hearth-orange focus:ring-1 focus:ring-hearth-orange transition-all"
                                />
                            </div>

                            <div className="w-full">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-5 py-4 bg-[#1C1C1E] border border-white/10 rounded-xl text-white placeholder-[var(--text-muted)] font-medium focus:outline-none focus:border-hearth-orange focus:ring-1 focus:ring-hearth-orange transition-all"
                                />
                            </div>

                            {/* Honeypot */}
                            <div className="absolute left-[-9999px] opacity-0" aria-hidden="true">
                                <input
                                    type="text"
                                    tabIndex="-1"
                                    autoComplete="off"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full mt-2 bg-hearth-orange hover:bg-[#D95C33] text-white font-semibold py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-hearth-orange/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-color)] focus-visible:ring-hearth-orange disabled:opacity-70 disabled:pointer-events-none"
                            >
                                {isSubmitting ? <Loader className="animate-spin" size={20} /> : "Join the Waitlist"}
                            </button>

                            {message.text && (
                                <div className={`mt-3 font-medium text-[15px] ${message.type === 'error' ? 'text-red-400' : 'text-emerald-400'}`}>
                                    {message.text}
                                </div>
                            )}
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
