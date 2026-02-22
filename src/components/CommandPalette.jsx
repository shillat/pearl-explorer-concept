import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, X, Map, Compass, Shield, Award, Globe, Linkedin, Github } from 'lucide-react';

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const items = [
        { name: 'Home / Entrance', path: '/', icon: <Compass size={16} />, category: 'Core' },
        { name: 'Safari Circuit / Parks', path: '/safari-circuit', icon: <Map size={16} />, category: 'Core' },
        { name: 'The Escape / Designer', path: '/escape', icon: <Globe size={16} />, category: 'Core' },
        { name: 'Entebbe Loop / Transit', path: '/entebbe-loop', icon: <Map size={16} />, category: 'Core' },
        { name: 'Heritage / Stories', path: '/heritage', icon: <Award size={16} />, category: 'Core' },
        { name: 'Travel Toolkit / Logistics', path: '/toolkit', icon: <Shield size={16} />, category: 'Core' },
        { name: 'LinkedIn Profile', path: 'https://www.linkedin.com/in/shillah-naigaga-1aa6a832a', icon: <Linkedin size={16} />, category: 'External', isExternal: true },
        { name: 'GitHub Architecture', path: 'https://github.com/shillat', icon: <Github size={16} />, category: 'External', isExternal: true }
    ];

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleAction = useCallback((item) => {
        if (item.isExternal) {
            window.open(item.path, '_blank');
        } else {
            navigate(item.path);
        }
        setIsOpen(false);
        setSearch('');
    }, [navigate]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[500] flex items-start justify-center pt-[15vh] px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-charcoal/80 backdrop-blur-2xl"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="w-full max-w-2xl glass-gold rounded-3xl overflow-hidden border border-gold/20 shadow-[0px_50px_100px_rgba(0,0,0,0.5)] relative z-10"
                    >
                        <div className="p-6 border-b border-charcoal/5 flex items-center gap-4 bg-charcoal/[0.02]">
                            <Search className="text-gold animate-pulse" size={20} />
                            <input
                                autoFocus
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search Digital Architecture... (Ctrl + K)"
                                className="w-full bg-transparent border-none focus:outline-none text-lg font-serif text-charcoal placeholder:text-charcoal/20"
                            />
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-charcoal/5 border border-charcoal/10 text-[10px] uppercase font-bold text-charcoal/40 tracking-widest">
                                <Command size={10} />
                                <span>K</span>
                            </div>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
                            {filteredItems.length > 0 ? (
                                <div className="space-y-1">
                                    {filteredItems.map((item, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleAction(item)}
                                            className="w-full text-left p-4 rounded-xl hover:bg-gold/10 hover:border-gold/20 border border-transparent transition-all group flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-8 h-8 glass rounded-lg flex items-center justify-center text-charcoal group-hover:text-gold transition-colors">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <span className="text-sm font-bold uppercase tracking-widest text-charcoal/80 group-hover:text-gold">{item.name}</span>
                                                    <div className="text-[10px] uppercase tracking-widest text-charcoal/20 font-bold mt-0.5">{item.category}</div>
                                                </div>
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Command size={14} className="text-gold" />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-20 text-center">
                                    <div className="text-gold/20 mb-4 flex justify-center">
                                        <X size={48} className="animate-pulse" />
                                    </div>
                                    <p className="text-charcoal/20 text-xs uppercase tracking-[0.4em] font-bold">No results grounded in the Pearl.</p>
                                </div>
                            )}
                        </div>

                        <div className="p-4 border-t border-charcoal/5 bg-charcoal/[0.01] flex justify-between items-center text-[9px] uppercase tracking-widest text-charcoal/20 font-bold">
                            <div className="flex gap-4">
                                <span className="flex items-center gap-1.5"><kbd className="px-1.5 py-0.5 rounded bg-charcoal/5 border border-charcoal/10 text-charcoal/40">↑↓</kbd> Navigate</span>
                                <span className="flex items-center gap-1.5"><kbd className="px-1.5 py-0.5 rounded bg-charcoal/5 border border-charcoal/10 text-charcoal/40">Enter</kbd> Select</span>
                            </div>
                            <span>Uganda Showcase v1.0</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
