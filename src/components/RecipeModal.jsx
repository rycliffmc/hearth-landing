import React, { useEffect } from 'react';
import { Clock, Users, CheckCircle2, RefreshCw, ShoppingCart, X } from 'lucide-react';
import gsap from 'gsap';

const ingredients = [
    { qty: '1', unit: 'whole', name: 'Whole Chicken' },
    { qty: '15', unit: 'ounce', name: 'Cannellini Beans' },
    { qty: '1', unit: 'medium', name: 'Yellow Onion' },
    { qty: '4', unit: 'cloves', name: 'Garlic' },
    { qty: '2', unit: 'tablespoon', name: 'Olive Oil' },
    { qty: '2', unit: 'tablespoon', name: 'Parsley' },
    { qty: '1', unit: 'leaf', name: 'Bay Leaf' },
    { qty: '1', unit: 'teaspoon', name: 'Salt' },
    { qty: '½', unit: 'teaspoon', name: 'Black Pepper' },
    { qty: '½', unit: 'cup', name: 'Water' },
];

const instructions = [
    "Preheat oven to 400°F (200°C). Pat the whole chicken dry with paper towels. Season generously inside and out with salt and black pepper.",
    "Chop the yellow onion into wedges and mince the garlic cloves. Place half of the onion and garlic inside the chicken cavity along with the bay leaf.",
    "In a large roasting pan, toss the remaining onion and garlic with 1 tablespoon of olive oil. Place the seasoned chicken on top of the vegetables.",
    "Roast for 1 hour, or until the chicken begins to brown. Drain and rinse the cannellini beans.",
    "Remove the pan from the oven. Carefully add the drained cannellini beans around the chicken, along with the remaining 1 tablespoon of olive oil and the water. Stir gently to combine the beans with the onions and garlic.",
    "Return the pan to the oven and continue roasting for another 20-30 minutes, or until the chicken reaches an internal temperature of 165°F (74°C) in the thickest part of the thigh, and the beans are heated through.",
    "Garnish with fresh parsley before serving."
];

export default function RecipeModal({ onClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        gsap.fromTo('.recipe-modal-bg',
            { opacity: 0 },
            { opacity: 1, duration: 0.3 }
        );

        gsap.fromTo('.recipe-modal-content',
            { y: '100%', opacity: 0, scale: 0.95 },
            { y: '0%', opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
        );

        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const handleClose = () => {
        gsap.to('.recipe-modal-bg', { opacity: 0, duration: 0.3 });
        gsap.to('.recipe-modal-content', {
            y: '100%', opacity: 0, scale: 0.95, duration: 0.4, ease: 'power3.in',
            onComplete: onClose
        });
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-end md:items-center justify-center sm:p-4 perspective-1000">
            <div className="recipe-modal-bg absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose}></div>

            <div className="recipe-modal-content relative w-full max-w-[430px] bg-[#0A0A0C] sm:rounded-[40px] rounded-t-[40px] border border-white/10 h-[92vh] sm:h-[85vh] flex flex-col shadow-2xl overflow-hidden origin-bottom">

                {/* Close Button Header */}
                <div className="flex justify-end p-4 bg-transparent absolute top-0 right-0 z-20 w-full pointer-events-none">
                    <button onClick={handleClose} className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors pointer-events-auto backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                        <X size={18} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="p-6 overflow-y-auto flex flex-col gap-8 scrollbar-hide pb-20">

                    {/* Title */}
                    <h2 className="text-[28px] font-bold text-white tracking-tight leading-[1.15]">Roasted Whole Chicken with Cannellini Beans and Herbs</h2>

                    {/* Recipe Details */}
                    <div>
                        <h3 className="text-[17px] font-bold text-white mb-3 tracking-wide">Recipe Details</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-[#1C1C1E] rounded-[20px] p-5 flex flex-col items-center justify-center gap-1.5 border border-white/5 shadow-inner">
                                <Clock className="text-[#0A84FF] mb-1" size={26} />
                                <span className="text-[13px] text-[var(--text-muted)] font-medium">Total Time</span>
                                <span className="font-bold text-white text-[16px]">1h 30m</span>
                            </div>
                            <div className="bg-[#1C1C1E] rounded-[20px] p-5 flex flex-col items-center justify-center gap-1.5 border border-white/5 shadow-inner">
                                <Users className="text-[#34C759] mb-1" size={26} />
                                <span className="text-[13px] text-[var(--text-muted)] font-medium">Servings</span>
                                <span className="font-bold text-white text-[16px]">4</span>
                            </div>
                        </div>
                    </div>



                    {/* Ingredient Check */}
                    <div>
                        <h3 className="text-[17px] font-bold text-white mb-3 tracking-wide">Ingredient Check</h3>

                        <div className="flex gap-4 mb-4 text-[13px] text-[var(--text-muted)] font-medium bg-[#1C1C1E]/50 p-2.5 rounded-lg w-fit border border-white/5">
                            <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#34C759]"></div> Have</div>
                            <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#FF9F0A]"></div> Substitution</div>
                            <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#FF453A]"></div> Missing</div>
                        </div>

                        <div className="flex justify-between bg-[#1C1C1E] rounded-[20px] p-5 border border-white/5 mb-4 px-6 relative shadow-inner">
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex items-center gap-1.5 text-[#34C759] font-bold text-2xl">
                                    <CheckCircle2 size={20} strokeWidth={3} className="mt-0.5" /> 10
                                </div>
                                <span className="text-[12px] text-[var(--text-muted)] font-medium uppercase tracking-wider">Have</span>
                            </div>
                            <div className="w-[1px] h-12 bg-white/10 self-center"></div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex items-center gap-1.5 text-[#FF9F0A] font-bold text-2xl">
                                    <RefreshCw size={20} strokeWidth={3} className="mt-0.5" /> 0
                                </div>
                                <span className="text-[12px] text-[var(--text-muted)] font-medium uppercase tracking-wider">Can Sub</span>
                            </div>
                            <div className="w-[1px] h-12 bg-white/10 self-center"></div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex items-center gap-1.5 text-[#FF453A] font-bold text-2xl">
                                    <ShoppingCart size={20} strokeWidth={3} className="mt-0.5" /> 0
                                </div>
                                <span className="text-[12px] text-[var(--text-muted)] font-medium uppercase tracking-wider">Need</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            {ingredients.map((ing, i) => (
                                <div key={i} className="flex items-center gap-4 bg-[#1C1C1E] rounded-xl p-3.5 border border-white/5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#34C759] shrink-0 ml-1"></div>
                                    <div className="flex items-center gap-3 flex-1">
                                        <span className="text-[15px] font-bold text-white w-6 text-right">{ing.qty}</span>
                                        <span className="text-[15px] text-[var(--text-muted)] w-20">{ing.unit}</span>
                                        <span className="text-[15px] font-semibold text-white">{ing.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>

                    {/* Instructions */}
                    <div>
                        <h3 className="text-[17px] font-bold text-white mb-6 tracking-wide">Instructions</h3>
                        <div className="flex flex-col gap-8 relative">
                            {instructions.map((step, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="w-7 h-7 rounded-full bg-[#0A84FF] text-white flex items-center justify-center font-bold text-[14px] shrink-0 mt-0.5 shadow-md shadow-[#0A84FF]/20">
                                        {i + 1}
                                    </div>
                                    <p className="text-[16px] text-[#EBEBF5] leading-relaxed font-medium">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
