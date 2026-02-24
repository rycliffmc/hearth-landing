import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full max-w-6xl mx-auto mt-40 pt-8 pb-12 border-t border-[var(--border-color)] text-sm font-medium text-[var(--text-muted)] text-left">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
                <p>2025 Hearth. Your pantry, automatically tracked.</p>
                <nav aria-label="Footer Navigation" className="flex flex-wrap gap-x-8 gap-y-4">
                    <a href="mailto:hello@usehearth.app" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-hearth-orange focus-visible:outline-none rounded -mx-2 px-2 py-1 min-h-[44px] flex items-center">Contact</a>
                    <a href="#privacy" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-hearth-orange focus-visible:outline-none rounded -mx-2 px-2 py-1 min-h-[44px] flex items-center">Privacy Policy</a>
                    <a href="#terms" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-hearth-orange focus-visible:outline-none rounded -mx-2 px-2 py-1 min-h-[44px] flex items-center">Terms of Service</a>
                </nav>
            </div>
            <p className="text-[13px] opacity-70">
                Made to reduce food waste, one meal at a time.
            </p>
        </footer>
    );
}
