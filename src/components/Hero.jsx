import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const INVENTORY_CARDS = [
    { title: "Ground Pork", subtitle: "Freezer", exp: "12d" },
    { title: "Organic Mango Chunks", subtitle: "Freezer", exp: "180d" },
    { title: "Lamb Leg", subtitle: "Fridge", exp: "2d", urgent: true },
    { title: "Whole Artichoke Hearts", subtitle: "Pantry", exp: "45d" },
    { title: "Fresh Basil", subtitle: "Fridge", exp: "4d" },
    { title: "Avocado", subtitle: "Pantry", exp: "1d", urgent: true },
];

export default function Hero() {
    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Initial state: perfect grid layout, just fade them in
            gsap.set('.inventory-card', { opacity: 0, y: 40 });

            // Show text and cards perfectly organized - start cards earlier
            const tl = gsap.timeline();
            tl.to('.inventory-card', { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.05, ease: 'power2.out' }, 0)
                .to('.hero-text', { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }, 0.4);

            // Pin the container
            ScrollTrigger.create({
                trigger: '.hero-container',
                start: 'top top',
                end: '+=800',
                pin: true,
            });

            // Fling cards away on scroll
            const flingTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.hero-container',
                    start: 'top top',
                    end: '+=800',
                    scrub: 1,
                }
            });

            gsap.utils.toArray('.inventory-card').forEach((card, i) => {
                flingTl.fromTo(card, {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    scale: 1,
                    opacity: 1
                }, {
                    x: () => gsap.utils.random(-1200, 1200),
                    y: () => gsap.utils.random(-1000, 1000),
                    rotation: () => gsap.utils.random(-90, 90),
                    scale: () => gsap.utils.random(0.5, 1.5),
                    opacity: 0,
                    ease: 'power2.in',
                }, 0);
            });

        }, comp);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={comp} aria-label="Hero Introduction" className="hero-container relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hearth-orange/10 blur-[120px] rounded-full pointer-events-none z-0" aria-hidden="true"></div>

            <div className="z-10 text-center pointer-events-none px-4 sm:px-6 mt-[-15vh] sm:mt-[-10vh]">
                <h1 className="hero-text opacity-0 translate-y-10 font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-4 sm:mb-6 text-white max-w-4xl leading-tight">
                    Intelligent inventory is the solution.
                </h1>
                <p className="hero-text opacity-0 translate-y-10 text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--text-muted)] max-w-2xl mx-auto font-medium leading-relaxed">
                    Other apps make you do the work.<br className="hidden md:block" /> <span className="bg-hearth-orange/20 text-hearth-orange/90 font-bold px-2 py-0.5 rounded">Hearth</span> tracks your kitchen for you.
                </p>
            </div>

            <div className="z-20 w-full max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 px-4 absolute top-[65%] sm:top-[60%] left-1/2 -translate-x-1/2 mt-12 md:mt-0 perspective-1000" aria-hidden="true">
                {INVENTORY_CARDS.map((card, i) => (
                    <div key={i} className={`inventory-card glass-panel rounded-2xl md:rounded-[2rem] p-3 sm:p-5 flex flex-col gap-2 md:gap-3 ${card.urgent ? 'border-hearth-orange/40 bg-hearth-orange/5' : ''}`}>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                            <span className="text-xs sm:text-sm font-medium text-[var(--text-muted)] bg-white/5 px-2 md:px-3 py-1 rounded-full w-fit">{card.subtitle}</span>
                            <span className={`text-[10px] sm:text-xs font-bold px-2 md:px-3 py-1 rounded-full w-fit ${card.urgent ? 'bg-hearth-orange/20 text-hearth-orange' : 'bg-white/10 text-[var(--text-muted)]'}`}>
                                Exp: {card.exp}
                            </span>
                        </div>
                        <h3 className="font-semibold text-sm sm:text-base md:text-xl text-white mt-1 leading-tight">{card.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
