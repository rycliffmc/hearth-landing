import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy({ onSignUpClick }) {
    const container = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Word-by-word reveal for the drama text
            gsap.from('.word-reveal', {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 75%',
                }
            });

            gsap.from('.btn-reveal', {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.btn-reveal-container',
                    start: 'top 85%'
                }
            });
        }, container);
        return () => ctx.revert();
    }, []);

    // Split text helper
    const renderWords = (text) => {
        return text.split(' ').map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-4 mr-[0.3em] font-medium align-bottom">
                <span className="word-reveal inline-block">{word}</span>
            </span>
        ));
    };

    return (
        <section ref={container} aria-label="Our Philosophy" className="relative py-40 px-6 w-full flex flex-col items-center justify-center text-center">
            <div className="max-w-5xl mx-auto flex flex-col gap-16 items-center">

                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[var(--text-muted)] leading-tight max-w-4xl">
                    {renderWords("Most inventory apps make you conform to their rules.")}
                </h2>

                <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white leading-tight mt-4 max-w-4xl">
                    <span className="text-hearth-orange inline-block overflow-hidden pb-4 mr-[0.3em] font-bold align-bottom">
                        <span className="word-reveal inline-block">Hearth</span>
                    </span>
                    {renderWords("conforms to your needs.")}
                </h2>

                <div className="btn-reveal-container mt-12 flex flex-col md:flex-row gap-6 w-full max-w-md justify-center">
                    <button onClick={onSignUpClick} className="btn-reveal magnetic-btn magnetic-btn-primary w-full text-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-color)] focus-visible:ring-hearth-orange focus-visible:outline-none min-h-[44px]">
                        Sign up now
                    </button>
                </div>
            </div>

            {/* Footer base */}
            {/* Footer base */}
            <Footer />
        </section>
    );
}
