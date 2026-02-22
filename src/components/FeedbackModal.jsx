import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X, Send, CheckCircle2, Heart, Award, Zap } from 'lucide-react';

const FeedbackModal = ({ isOpen, onClose }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [category, setCategory] = useState('Design');
    const [submitted, setSubmitted] = useState(false);
    const [feedback, setFeedback] = useState('');

    const categories = [
        { id: 'Design', icon: <Award className="w-4 h-4" />, label: 'Aesthetics' },
        { id: 'Technical', icon: <Zap className="w-4 h-4" />, label: 'Architecture' },
        { id: 'Content', icon: <Heart className="w-4 h-4" />, label: 'Storytelling' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Architecture Review: ${category} - ${rating} Stars`);
        const body = encodeURIComponent(
            `I have reviewed the Uganda Showcase Digital Architecture.\n\n` +
            `Rating: ${rating}/5 Stars\n` +
            `Category: ${category}\n\n` +
            `Feedback:\n${feedback || 'No comments provided.'}\n\n` +
            `--- Sent via Portfolio Feedback Node ---`
        );

        window.location.href = `mailto:shillahnaigaga5@gmail.com?subject=${subject}&body=${body}`;

        setSubmitted(true);
        setTimeout(() => {
            onClose();
            setSubmitted(false);
            setRating(0);
            setFeedback('');
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-charcoal/90 backdrop-blur-xl"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="glass-gold w-full max-w-xl rounded-[3rem] overflow-hidden relative z-10 border-gold/10 shadow-[0px_50px_100px_rgba(0,0,0,0.8)]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-500 z-20"
                        >
                            <X size={18} />
                        </button>

                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="p-12 md:p-16">
                                <h4 className="text-gold uppercase tracking-[0.6em] font-bold text-[10px] mb-6 flex items-center gap-4">
                                    <Star size={12} fill="currentColor" />
                                    Digital Architecture Review
                                </h4>
                                <h2 className="text-4xl font-serif font-bold mb-10 leading-tight text-white">Rate the <span className="italic text-gold grad-gold">Experience.</span></h2>

                                {/* Star Rating */}
                                <div className="flex justify-center gap-4 mb-12">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <motion.button
                                            key={star}
                                            type="button"
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setRating(star)}
                                            onMouseEnter={() => setHover(star)}
                                            onMouseLeave={() => setHover(0)}
                                            className="focus:outline-none"
                                        >
                                            <Star
                                                size={40}
                                                className={`transition-all duration-300 ${(hover || rating) >= star
                                                    ? 'text-gold fill-gold drop-shadow-[0px_0px_15px_rgba(212,175,55,0.5)]'
                                                    : 'text-white/20'
                                                    }`}
                                            />
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Categories */}
                                <div className="grid grid-cols-3 gap-4 mb-10">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.id}
                                            type="button"
                                            onClick={() => setCategory(cat.id)}
                                            className={`py-4 px-2 rounded-2xl border transition-all duration-500 flex flex-col items-center gap-3 ${category === cat.id
                                                ? 'bg-gold/10 border-gold text-gold'
                                                : 'bg-charcoal/[0.02] border-charcoal/5 text-charcoal/40 hover:border-charcoal/20'
                                                }`}
                                        >
                                            {cat.icon}
                                            <span className="text-[9px] uppercase font-bold tracking-widest text-white">{cat.label}</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Text Area */}
                                <textarea
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    placeholder="Your qualitative feedback (optional)..."
                                    className="w-full h-32 bg-charcoal/[0.03] border border-charcoal/5 rounded-2xl p-6 text-sm text-white focus:outline-none focus:border-gold/30 transition-colors mb-10 resize-none placeholder:text-white/30"
                                />

                                <button
                                    type="submit"
                                    disabled={rating === 0}
                                    className={`w-full py-5 rounded-full flex items-center justify-center gap-4 group transition-all duration-500 font-bold uppercase tracking-widest text-[11px] ${rating > 0
                                        ? 'bg-gold text-charcoal shadow-[0_20px_40px_rgba(212,175,55,0.3)] hover:scale-[1.02]'
                                        : 'bg-charcoal/5 text-white/40 cursor-not-allowed'
                                        }`}
                                >
                                    <span>Transmit Feedback</span>
                                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-20 text-center"
                            >
                                <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-gold/20">
                                    <CheckCircle2 size={40} className="text-gold animate-pulse" />
                                </div>
                                <h2 className="text-4xl font-serif font-bold mb-6 text-white">Transmission <span className="text-gold italic">Received</span></h2>
                                <p className="text-white/60 leading-relaxed max-w-xs mx-auto text-lg font-light">
                                    Your architectural insights have been grounded in the Pearl's digital heart.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default FeedbackModal;
