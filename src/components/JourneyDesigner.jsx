import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check, Compass, Users, Sparkles, Send } from 'lucide-react';

const JourneyDesigner = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState({
        theme: '',
        vibe: '',
        travelers: 1,
        contact: { name: '', email: '' }
    });

    const destinationMap = {
        'primes-luxury': {
            name: 'Sanctuary Gorilla Forest Camp',
            desc: 'The only luxury camp located deep inside Bwindi Impenetrable National Park.',
            url: 'https://www.abercrombiekent.com/uganda/bwindi-impenetrable-forest/sanctuary-gorilla-forest-camp'
        },
        'primes-adventure': {
            name: 'UWEC Primate Research Base',
            desc: 'Stay at the heart of conservation at the Entebbe bandas or Bwindi research outposts.',
            url: 'https://uwec.ug/reservations/'
        },
        'wild-luxury': {
            name: 'Nile Safari Lodge',
            desc: 'Ultimate luxury overlooking the Murchison Falls and the mighty Nile river.',
            url: 'https://nilesafarilodge.com/'
        },
        'wild-adventure': {
            name: 'UWA Wild Frontier',
            desc: 'Official UWA park lodging and permit gateways for the rugged explorer.',
            url: 'https://ugandawildlife.org/'
        },
        'culture': {
            name: 'UWEC Cultural Sanctuary',
            desc: 'Experience the intersection of wildlife and heritage at the official education centre.',
            url: 'https://uwec.ug/reservations/'
        }
    };

    const getTarget = () => {
        if (selections.theme === 'culture') return destinationMap['culture'];
        const key = `${selections.theme}-${selections.vibe}`;
        return destinationMap[key] || destinationMap['primes-luxury'];
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const themes = [
        { id: 'primes', label: 'Primate Eden', icon: <Compass className="text-gold" /> },
        { id: 'wild', label: 'Wilderness Icon', icon: <Sparkles className="text-gold" /> },
        { id: 'culture', label: 'Cultural Legacy', icon: <Users className="text-gold" /> }
    ];

    const vibes = [
        { id: 'luxury', label: 'Quiet Luxury', desc: 'Refined, slow-paced, absolute comfort.' },
        { id: 'adventure', label: 'Rugged Discovery', desc: 'Active exploration, closer to the pulse.' }
    ];

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-charcoal/95 backdrop-blur-2xl"
                    onClick={onClose}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="glass-gold w-full max-w-3xl rounded-[3rem] p-8 md:p-16 relative z-10 overflow-hidden"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 text-charcoal/20 hover:text-gold transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {/* Progress Indicator */}
                    <div className="flex space-x-2 mb-12">
                        {[1, 2, 3, 4].map(i => (
                            <div
                                key={i}
                                className={`h-1 flex-grow rounded-full transition-all duration-700 ${i <= step ? 'bg-gold shadow-[0px_0px_10px_rgba(212,175,55,0.5)]' : 'bg-charcoal/5'
                                    }`}
                            />
                        ))}
                    </div>

                    <div className="min-h-[400px]">
                        {step === 1 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <h4 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Phase 01</h4>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic text-charcoal">Define Your Theme</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
                                    {themes.map(t => (
                                        <button
                                            key={t.id}
                                            onClick={() => { setSelections({ ...selections, theme: t.id }); nextStep(); }}
                                            className="glass p-8 rounded-3xl text-center hover-gold-glow group transition-all"
                                        >
                                            <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                                {t.icon}
                                            </div>
                                            <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal">{t.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <h4 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Phase 02</h4>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic text-charcoal">The Rhythm</h2>
                                <div className="space-y-4">
                                    {vibes.map(v => (
                                        <button
                                            key={v.id}
                                            onClick={() => { setSelections({ ...selections, vibe: v.id }); nextStep(); }}
                                            className="w-full glass p-8 rounded-3xl text-left hover-gold-glow flex justify-between items-center group"
                                        >
                                            <div>
                                                <h4 className="text-lg font-bold uppercase tracking-widest mb-2 text-charcoal">{v.label}</h4>
                                                <p className="text-charcoal/40 text-sm font-light">{v.desc}</p>
                                            </div>
                                            <ArrowRight className="text-gold opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-500" />
                                        </button>
                                    ))}
                                </div>
                                <button onClick={prevStep} className="mt-8 text-white/30 text-[10px] uppercase font-bold hover:text-white transition-colors">Back</button>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <h4 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Phase 03</h4>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 italic text-center text-charcoal">The Gathering</h2>
                                <div className="flex items-center justify-center space-x-8 mb-16">
                                    <button
                                        onClick={() => selections.travelers > 1 && setSelections({ ...selections, travelers: selections.travelers - 1 })}
                                        className="w-16 h-16 glass rounded-full flex items-center justify-center text-2xl"
                                    >
                                        -
                                    </button>
                                    <span className="text-8xl font-serif font-bold grad-gold">{selections.travelers}</span>
                                    <button
                                        onClick={() => setSelections({ ...selections, travelers: selections.travelers + 1 })}
                                        className="w-16 h-16 glass rounded-full flex items-center justify-center text-2xl"
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="text-center">
                                    <p className="text-charcoal/30 uppercase tracking-[0.3em] text-[10px] font-bold mb-12 italic">Number of Distinguished Travelers</p>
                                    <button onClick={nextStep} className="btn-premium rounded-full px-16 mx-auto">Confirm Gathering</button>
                                    <br />
                                    <button onClick={prevStep} className="mt-8 text-charcoal/30 text-[10px] uppercase font-bold hover:text-charcoal transition-colors">Back</button>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                                <h4 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Final Phase</h4>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic leading-tight text-charcoal">Seal the Vision.</h2>
                                <div className="space-y-6">
                                    <div className="group">
                                        <label className="text-[10px] uppercase tracking-widest text-charcoal/30 mb-2 block font-bold transition-colors group-focus-within:text-gold">Your Name</label>
                                        <input
                                            type="text"
                                            value={selections.contact.name}
                                            onChange={(e) => setSelections({ ...selections, contact: { ...selections.contact, name: e.target.value } })}
                                            className="w-full bg-charcoal/[0.02] border border-charcoal/5 p-6 rounded-2xl focus:outline-none focus:border-gold/30 transition-all font-serif text-xl text-charcoal"
                                            placeholder="e.g. Elena Vance"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="text-[10px] uppercase tracking-widest text-charcoal/30 mb-2 block font-bold transition-colors group-focus-within:text-gold">Secure Channel (Email)</label>
                                        <input
                                            type="email"
                                            value={selections.contact.email}
                                            onChange={(e) => setSelections({ ...selections, contact: { ...selections.contact, email: e.target.value } })}
                                            className="w-full bg-charcoal/[0.02] border border-charcoal/5 p-6 rounded-2xl focus:outline-none focus:border-gold/30 transition-all font-serif text-xl text-charcoal"
                                            placeholder="elena@lumina.corp"
                                        />
                                    </div>
                                    <button
                                        onClick={() => nextStep()}
                                        disabled={!selections.contact.name || !selections.contact.email}
                                        className="btn-premium rounded-full w-full py-6 mt-6 flex justify-between items-center px-12 disabled:opacity-20"
                                    >
                                        <span>Finalize The Escape</span>
                                        <Send size={18} />
                                    </button>
                                </div>
                                <button onClick={prevStep} className="mt-8 text-white/30 text-[10px] uppercase font-bold hover:text-white transition-colors">Back</button>
                            </motion.div>
                        )}

                        {step === 5 && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-4"
                            >
                                <div className="w-20 h-20 glass-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0px_0px_30px_rgba(212,175,55,0.4)]">
                                    <Check className="text-gold w-8 h-8" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 italic text-charcoal">The Pulse is set, {selections.contact.name.split(' ')[0]}.</h2>
                                <p className="text-charcoal/40 text-base font-light leading-relaxed max-w-sm mx-auto mb-10">
                                    Based on your design, we've identified the perfect sanctuary for your escape.
                                </p>

                                <div className="glass p-8 rounded-3xl border-gold/10 mb-10 text-left relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-6 text-gold opacity-5 rotate-12 group-hover:scale-125 transition-transform duration-1000">
                                        <Sparkles size={120} />
                                    </div>
                                    <h4 className="text-gold uppercase tracking-[0.3em] text-[9px] font-bold mb-2">Recommended Destination</h4>
                                    <h3 className="text-2xl font-serif font-bold mb-3 text-charcoal">{getTarget().name}</h3>
                                    <p className="text-charcoal/40 text-xs font-light mb-8 leading-relaxed italic">{getTarget().desc}</p>

                                    <a
                                        href={getTarget().url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-premium rounded-full w-full py-4 flex justify-between items-center px-8 text-sm"
                                    >
                                        <span>Secure This Journey</span>
                                        <ExternalLink size={16} />
                                    </a>
                                </div>

                                <button
                                    onClick={onClose}
                                    className="text-charcoal/20 text-[10px] font-bold uppercase tracking-widest hover:text-gold transition-colors"
                                >
                                    Return to Exploration
                                </button>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default JourneyDesigner;
