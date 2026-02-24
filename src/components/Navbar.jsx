import React from 'react';

export default function Navbar({ onSignUpClick }) {
    return (
        <nav aria-label="Main Navigation" className="fixed top-0 left-0 w-full z-[100] pointer-events-none">
            <div className="flex items-center justify-between px-6 md:px-10 py-5">
                <a href="#" aria-label="Hearth Home" className="flex items-center gap-3 font-bold text-2xl tracking-tight text-white focus-visible:ring-2 focus-visible:ring-hearth-orange focus-visible:outline-none rounded-lg px-2 py-1 -ml-2 transition-all pointer-events-auto">
                    <div className="w-4 h-4 rounded-full bg-hearth-orange shadow-[0_0_10px_rgba(217,92,51,0.5)]" aria-hidden="true"></div>
                    Hearth
                </a>

                <button onClick={onSignUpClick} aria-label="Sign Up for Hearth" className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-7 py-3 rounded-full transition-colors border border-white/10 shadow-lg backdrop-blur-md focus-visible:ring-2 focus-visible:ring-hearth-orange focus-visible:outline-none min-h-[44px] pointer-events-auto">
                    Sign Up
                </button>
            </div>
        </nav>
    );
}
