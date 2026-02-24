import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Loader, MessageSquare, ListPlus, Droplets, Cloud, Receipt } from 'lucide-react';
import RecipeModal from './RecipeModal';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
    const comp = useRef();
    const [activeTab, setActiveTab] = useState('Fridge');
    const [showRecipeModal, setShowRecipeModal] = useState(false);

    const inventoryData = {
        Fridge: [
            { n: 'Whole Milk', d: '2 days', urgent: true },
            { n: 'Organic Eggs', d: '5 days', warning: true },
            { n: 'Spinach', d: '1 day', urgent: true }
        ],
        Freezer: [
            { n: 'Whole chicken', d: '120 days' },
            { n: 'Shrimp gyoza', d: '70 days' },
            { n: 'Frozen Green Beans', d: '30 days' }
        ],
        Pantry: [
            { n: 'Steel Cut Oats', d: '270 days' },
            { n: 'Almond butter', d: '360 days' },
            { n: 'Potato Chips', d: '14 days' }
        ]
    };

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // 1. Fade up sections
            gsap.utils.toArray('.feature-section').forEach(section => {
                gsap.from(section, {
                    y: 80,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                    }
                });
            });

            // 3. Counter animations for impact
            gsap.utils.toArray('.impact-number').forEach(node => {
                const target = parseFloat(node.getAttribute('data-target'));
                const suffix = node.getAttribute('data-suffix') || '';
                gsap.fromTo(node,
                    { textContent: 0 },
                    {
                        textContent: target,
                        duration: 2.5,
                        ease: 'power2.out',
                        snap: { textContent: 0.1 },
                        scrollTrigger: {
                            trigger: '.impact-bento',
                            start: 'top 80%'
                        },
                        onUpdate: function () {
                            node.textContent = Number(this.targets()[0].textContent).toFixed(1) + suffix;
                        }
                    }
                );
            });

            // 4. Recipe Scanner Animation
            const scanTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.scan-sequence',
                    start: 'top 65%',
                }
            });

            gsap.set(['.scan-line-1', '.scan-step-2', '.scan-line-2', '.scan-step-3'], { opacity: 0, y: -20 });

            scanTl
                .to({}, { duration: 0.5 })
                .to('.scan-step-1', { backgroundColor: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,1)', duration: 0.15 })
                .to('.scan-step-1', { backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)', duration: 0.3 })
                .add(() => {
                    const text1 = document.querySelector('.scan-text-1');
                    if (text1) text1.textContent = "Scanned \"Grandma's Chili\" Recipe";
                    const icon1 = document.querySelector('.scan-icon-1');
                    if (icon1) {
                        icon1.classList.remove('text-[var(--text-muted)]');
                        icon1.classList.add('text-white');
                    }
                }, "-=0.2")
                .to('.scan-line-1', { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, "+=0.2")
                .to('.scan-step-2', { opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.5)' })
                .to({}, { duration: 1.5 })
                .add(() => {
                    const spinner = document.querySelector('.scan-spinner');
                    if (spinner) {
                        spinner.classList.remove('animate-spin');
                    }
                })
                .to('.scan-line-2', { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, "+=0.2")
                .to('.scan-step-3', { opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.5)' });

        }, comp);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={comp} className="w-full relative z-10 flex flex-col gap-40 py-32 px-6 max-w-6xl mx-auto">
            {/* Section 1: Know Your Kitchen */}
            <section className="feature-section grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="flex flex-col gap-4 md:gap-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">Know Your Kitchen.</h2>
                    <p className="text-xl md:text-2xl text-[var(--text-muted)] leading-relaxed">
                        Hearth does the heavy lifting to track what you have and when it expires. <span className="text-white">Zero waste</span> is just a byproduct of perfect organization.
                    </p>
                </div>
                <div className="glass-panel p-8 rounded-[2.5rem] flex flex-col gap-8 relative overflow-hidden shadow-2xl">
                    <div className="flex gap-2 p-1.5 bg-white/5 rounded-full w-fit mx-auto md:mx-0 border border-white/5" role="tablist" aria-label="Inventory Sections">
                        <button role="tab" aria-selected={activeTab === 'Fridge'} aria-controls="inventory-tabpanel" id="tab-fridge" onClick={() => setActiveTab('Fridge')} className={`glass-pill focus-visible:ring-2 focus-visible:ring-hearth-orange focus-visible:outline-none ${activeTab === 'Fridge' ? 'active' : 'border-transparent text-[var(--text-muted)] hover:text-white'}`}>Fridge</button>
                        <button role="tab" aria-selected={activeTab === 'Freezer'} aria-controls="inventory-tabpanel" id="tab-freezer" onClick={() => setActiveTab('Freezer')} className={`glass-pill focus-visible:ring-2 focus-visible:ring-hearth-orange focus-visible:outline-none ${activeTab === 'Freezer' ? 'active' : 'border-transparent text-[var(--text-muted)] hover:text-white'}`}>Freezer</button>
                        <button role="tab" aria-selected={activeTab === 'Pantry'} aria-controls="inventory-tabpanel" id="tab-pantry" onClick={() => setActiveTab('Pantry')} className={`glass-pill focus-visible:ring-2 focus-visible:ring-hearth-orange focus-visible:outline-none ${activeTab === 'Pantry' ? 'active' : 'border-transparent text-[var(--text-muted)] hover:text-white'}`}>Pantry</button>
                    </div>
                    <div id="inventory-tabpanel" role="tabpanel" aria-labelledby={`tab-${activeTab.toLowerCase()}`} className="flex flex-col gap-4 z-10 min-h-[220px]" aria-live="polite">
                        {inventoryData[activeTab].map((item, i) => (
                            <div key={i} className="flex justify-between items-center p-5 bg-[var(--glass-bg)] rounded-2xl border border-[var(--border-color)]">
                                <span className="font-semibold text-lg text-white">{item.n}</span>
                                <span className={`text-sm font-medium px-3 py-1 rounded-full ${item.urgent
                                    ? 'bg-red-500/10 text-red-500 border border-red-500/20'
                                    : item.warning
                                        ? 'bg-hearth-orange/20 text-hearth-orange border border-hearth-orange/30'
                                        : 'bg-white/5 text-[var(--text-muted)] border border-white/5'
                                    }`}>Exp: {item.d}</span>
                            </div>
                        ))}
                    </div>
                    {/* Subtle gradient glow */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-hearth-orange/10 blur-[100px] rounded-full pointer-events-none -mr-20 -mt-20"></div>
                </div>
            </section>

            {/* Section 2: Generate & Cook */}
            <section className="feature-section grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="order-2 lg:order-1 glass-panel p-4 sm:p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] flex flex-col gap-4 md:gap-5 relative overflow-hidden h-[450px] sm:h-[500px] md:h-[550px] shadow-2xl border border-[var(--border-color)]">

                    {/* User Prompt (Right aligned) */}
                    <div className="flex w-full justify-end z-10">
                        <div className="bg-[#E86A33] rounded-2xl rounded-br-sm p-4 text-[15px] font-medium text-white shadow-lg max-w-[85%] leading-relaxed">
                            Can you generate a recipe using the whole chicken and cannellini beans?
                        </div>
                    </div>

                    {/* Hearth Response (Left aligned) */}
                    <div className="flex flex-col gap-3 w-[95%] z-10">
                        {/* Text reply */}
                        <div className="bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-2xl rounded-bl-sm p-4 text-[15px] text-[var(--text-muted)] backdrop-blur-md shadow-md">
                            Here's a Mediterranean-inspired dish using your whole chicken and cannellini beans.
                        </div>

                        {/* Recipe Card */}
                        <div className="bg-[#1C1C1E] border border-[var(--border-color)] rounded-2xl p-5 shadow-xl flex flex-col gap-3">
                            <h3 className="font-bold text-lg text-white leading-tight">Roasted Whole Chicken with Cannellini Beans and Herbs</h3>
                            <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">
                                A simple and aromatic Mediterranean-style roasted chicken dish with tender cannellini beans.
                            </p>

                            <div className="flex gap-4 text-[13px] font-medium text-[var(--text-muted)] items-center mt-1">
                                <span className="flex items-center gap-1.5">
                                    <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center text-[8px]">⏱</span>
                                    90 min
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <span className="text-[12px]">👥</span>
                                    4 servings
                                </span>
                                <span className="bg-[#E86A33]/15 text-[#E86A33] px-2.5 py-0.5 rounded-full text-xs">
                                    Mediterranean
                                </span>
                            </div>

                            <button onClick={() => setShowRecipeModal(true)} className="mt-3 w-full bg-[#E86A33] hover:bg-[#D95C33] text-white font-semibold py-3.5 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-[#E86A33]/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1C1E] min-h-[44px]">
                                <span className="bg-white/20 rounded-full w-4 h-4 flex items-center justify-center text-[10px]" aria-hidden="true">✓</span>
                                Generate Recipe
                            </button>
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 z-10">
                        <div className="h-14 bg-[#1C1C1E] border border-[var(--border-color)] rounded-full flex items-center px-6 text-[15px] text-[var(--text-muted)] shadow-xl relative">
                            <span className="text-[#E86A33] mr-3 font-medium">@</span>
                            <span>Describe what you're craving...</span>
                        </div>
                    </div>

                    {/* Subtle gradient glow */}
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E86A33]/5 blur-[100px] rounded-full pointer-events-none -ml-20 -mb-20"></div>
                </div>
                <div className="order-1 lg:order-2 flex flex-col gap-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">Generate & Cook.</h2>
                    <p className="text-xl md:text-2xl text-[var(--text-muted)] leading-relaxed">
                        Dietary restrictions? No problem. Hearth generates perfect meals based on <span className="text-white">exactly what is in your fridge</span> and your specific needs, and then automatically updates your inventory after cooking the meal.
                    </p>
                </div>
            </section>

            {/* Section 3: Impact */}
            <section className="feature-section flex flex-col gap-10 md:gap-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">Track Your Impact.</h2>
                    <p className="text-xl md:text-2xl text-[var(--text-muted)]">Every meal rescued is a win for your wallet and the planet.</p>
                </div>
                <div className="impact-bento grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Water Tracked */}
                    <div className="glass-panel p-10 rounded-[2.5rem] flex flex-col gap-3 items-center text-center transition-all duration-500 border-t-2 border-t-blue-500 hover:border-t-blue-400 shadow-xl hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:bg-blue-500/5 group" aria-label="41.1 Thousand Gallons of Water Tracked" tabIndex="0" role="group">
                        <div className="p-4 bg-blue-500/10 rounded-2xl mb-4 border border-blue-500/20 group-focus-visible:ring-2 group-focus-visible:ring-blue-400 group-focus-visible:outline-none">
                            <Droplets className="text-blue-400" size={32} aria-hidden="true" />
                        </div>
                        <div className="text-5xl font-bold text-white tracking-tight" aria-hidden="true"><span className="impact-number" data-target="41.1" data-suffix="K">0.0</span></div>
                        <p className="text-[var(--text-muted)] font-medium" aria-hidden="true">Gal Water Tracked</p>
                    </div>
                    {/* Money Rescued */}
                    <div className="glass-panel p-10 rounded-[2.5rem] flex flex-col gap-3 items-center text-center transition-all duration-500 border-t-2 border-t-hearth-orange hover:border-t-hearth-orange shadow-xl hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(217,92,51,0.25)] hover:bg-hearth-orange/5 group" aria-label="389 Dollars Money Rescued" tabIndex="0" role="group">
                        <div className="p-4 bg-hearth-orange/10 rounded-2xl mb-4 border border-hearth-orange/20 group-focus-visible:ring-2 group-focus-visible:ring-hearth-orange group-focus-visible:outline-none">
                            <Receipt className="text-hearth-orange" size={32} aria-hidden="true" />
                        </div>
                        <div className="text-5xl font-bold text-white tracking-tight" aria-hidden="true">$<span className="impact-number" data-target="389" data-suffix="">0</span></div>
                        <p className="text-[var(--text-muted)] font-medium" aria-hidden="true">Money Rescued</p>
                    </div>
                    {/* CO2 Tracked */}
                    <div className="glass-panel p-10 rounded-[2.5rem] flex flex-col gap-3 items-center text-center transition-all duration-500 border-t-2 border-t-emerald-500 hover:border-t-emerald-400 shadow-xl hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:bg-emerald-500/5 group" aria-label="1.6 Thousand Pounds CO2 Tracked" tabIndex="0" role="group">
                        <div className="p-4 bg-emerald-500/10 rounded-2xl mb-4 border border-emerald-500/20 group-focus-visible:ring-2 group-focus-visible:ring-emerald-400 group-focus-visible:outline-none">
                            <Cloud className="text-emerald-400" size={32} aria-hidden="true" />
                        </div>
                        <div className="text-5xl font-bold text-white tracking-tight" aria-hidden="true"><span className="impact-number" data-target="1.6" data-suffix="K">0.0</span></div>
                        <p className="text-[var(--text-muted)] font-medium" aria-hidden="true">Lbs CO2 Tracked</p>
                    </div>
                </div>
            </section>

            {/* Section 4: Recipe Scanner */}
            <section className="feature-section grid lg:grid-cols-2 gap-10 md:gap-16 items-center border-t border-[var(--border-color)] pt-20 md:pt-32">
                <div className="flex flex-col gap-4 md:gap-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">Recipe Scanner & Shopping List.</h2>
                    <p className="text-xl md:text-2xl text-[var(--text-muted)] leading-relaxed">
                        Scan family recipes by simply taking a picture. Hearth <span className="text-white">cross-references your current inventory</span> and automatically adds missing items to your shopping list.
                    </p>
                </div>
                <div className="glass-panel p-6 sm:p-10 rounded-3xl md:rounded-[2.5rem] flex flex-col justify-center relative overflow-hidden h-[400px] md:h-[480px] shadow-2xl">
                    <div className="scan-sequence flex flex-col gap-4 md:gap-6 items-center w-full max-w-[320px] mx-auto z-10 scale-90 sm:scale-100">
                        <div className="scan-step-1 flex items-center gap-4 bg-[var(--glass-bg)] border border-[var(--border-color)] p-4 rounded-2xl w-full shadow-lg">
                            <Camera className="scan-icon-1 text-[var(--text-muted)] mt-0.5 shrink-0" size={24} />
                            <span className="scan-text-1 text-base font-medium text-white transition-colors duration-200">Scan "Grandma's Chili"...</span>
                        </div>

                        <div className="scan-line-1 flex flex-col items-center justify-center w-[2px] h-10 bg-gradient-to-b from-white/20 to-hearth-orange/50 relative"></div>

                        <div className="scan-step-2 flex items-center gap-4 bg-hearth-orange/10 border border-hearth-orange/20 p-4 rounded-2xl w-full text-hearth-orange shadow-[0_0_20px_rgba(217,92,51,0.1)]">
                            <Loader className="scan-spinner animate-spin shrink-0" size={24} />
                            <span className="text-base font-semibold">Cross-referencing Inventory</span>
                        </div>

                        <div className="scan-line-2 flex flex-col items-center justify-center w-[2px] h-10 bg-gradient-to-b from-hearth-orange/50 to-emerald-500/50 relative"></div>

                        <div className="scan-step-3 flex items-center gap-4 bg-[var(--glass-bg)] border border-emerald-500/30 p-4 rounded-2xl w-full text-white shadow-lg">
                            <ListPlus className="text-emerald-400 shrink-0" size={24} />
                            <span className="text-[13px] leading-snug font-medium text-emerald-100">Added 'Kidney Beans' to 'Hearth Shopping List' in Reminders</span>
                        </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
                </div>
            </section>

            {/* Section 5: Accessibility */}
            <section className="feature-section flex flex-col gap-8 md:gap-12 border-t border-[var(--border-color)] pt-20 md:pt-32">
                <div className="flex flex-col gap-4 md:gap-6 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">Everyone deserves to have access to Hearth.</h2>
                    <p className="text-xl md:text-2xl text-[var(--text-muted)] leading-relaxed">
                        I've spent a lot of time making sure that this is fully accessible. This is not an afterthought — it's baked into the DNA of the app.
                    </p>
                </div>

                <div className="glass-panel p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-[2.5rem] relative overflow-hidden shadow-2xl border border-[var(--border-color)] bg-gradient-to-br from-white/5 to-transparent">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative z-10">
                        {/* Left Column: Rating & Core Info */}
                        <div className="flex flex-col gap-6 md:w-1/3 border-b md:border-b-0 md:border-r border-[var(--border-color)] pb-8 md:pb-0 md:pr-8">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-3xl font-bold text-white tracking-tight">Accessibility</h3>
                                <p className="text-lg text-hearth-orange font-medium">Excellence</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider">Notes</span>
                                <p className="text-base text-white/90 font-medium leading-relaxed">WCAG 2.1 AA compliance is exceptional for an iOS app.</p>
                            </div>
                        </div>

                        {/* Right Column: Features List */}
                        <div className="flex flex-col gap-6 md:w-2/3">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                WCAG 2.1 AA Compliant
                                <span className="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-500/30 uppercase tracking-widest font-bold">Verified</span>
                            </h3>

                            <ul className="flex flex-col gap-4 text-base md:text-lg text-[var(--text-muted)]">
                                <li className="flex gap-4">
                                    <span className="text-hearth-orange mt-1">✓</span>
                                    <span>Built-in <b>VoiceOver</b> support, <b>Dynamic Type</b> scaling (AX1-AX5), reduce motion/transparency alternatives.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-hearth-orange mt-1">✓</span>
                                    <span><b>44pt minimum</b> touch targets enforced across all interactive elements.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-hearth-orange mt-1">✓</span>
                                    <span>High-contrast color system with proper <b>semantic colors</b> for state communication.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-hearth-orange mt-1">✓</span>
                                    <span>Includes an Accessibility utilities file (39KB) demonstrating commitment to inclusivity.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-hearth-orange mt-1">✓</span>
                                    <span>Comprehensive validation view for ongoing WCAG compliance testing.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Subtle gradient glow */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -mr-40 -mt-40"></div>
                </div>
            </section>

            {showRecipeModal && <RecipeModal onClose={() => setShowRecipeModal(false)} />}
        </div>
    );
}
