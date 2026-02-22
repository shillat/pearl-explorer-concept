import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, MessageCircle, Bot, Globe, Circle, Star } from 'lucide-react';
import FeedbackModal from './FeedbackModal';

const Footer = () => {
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const exploreLinks = [
        { name: 'Entebbe Loop', path: '/entebbe-loop' },
        { name: 'Safari Circuit', path: '/safari-circuit' },
        { name: 'Experience', path: '/escape' },
        { name: 'Heritage', path: '/heritage' }
    ];

    const techLinks = [
        { name: 'Travel Toolkit', path: '/toolkit' },
        { name: 'Weather Portal', path: '/toolkit' },
        { name: 'Secure Channel', path: '/escape' }
    ];

    return (
        <footer className="bg-charcoal border-t border-white/5 pt-24 pb-12 relative overflow-hidden text-white">
            {/* Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] -z-10"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
                    <div className="md:col-span-2">
                        <h3 className="text-3xl font-serif font-bold mb-8 italic text-gold grad-gold inline-block">Uganda Showcase</h3>
                        <p className="text-white/40 max-w-sm mb-10 text-lg leading-relaxed font-light">
                            A premier digital concierge dedicated to the unmatched biology and royal heritage of the Heart of Africa.
                        </p>
                        <div className="flex space-x-6">
                            <a href="https://www.linkedin.com/in/shillah-naigaga-1aa6a832a" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass flex items-center justify-center rounded-full hover:bg-gold hover:text-white transition-all duration-500 group border-white/5" title="LinkedIn - Professional Identity">
                                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://github.com/shillat" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass flex items-center justify-center rounded-full hover:bg-gold hover:text-white transition-all duration-500 group border-white/5" title="GitHub - Technical Architecture">
                                <Github size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://wa.me/0777624761" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass flex items-center justify-center rounded-full hover:bg-gold hover:text-white transition-all duration-500 group border-white/5" title="WhatsApp - Direct Inquiry">
                                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="mailto:shillahnaigaga5@gmail.com" className="w-12 h-12 glass flex items-center justify-center rounded-full hover:bg-gold hover:text-white transition-all duration-500 group border-white/5" title="Chatbot / Email - Formal Channel">
                                <Bot size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://shillat.github.io/first-project/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass flex items-center justify-center rounded-full hover:bg-gold hover:text-white transition-all duration-500 group border-white/5" title="Personal Site - Portfolio Depth">
                                <Globe size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-10">Explore</h4>
                        <ul className="space-y-6">
                            {exploreLinks.map((item, idx) => (
                                <li key={idx} className="group">
                                    <Link to={item.path} className="flex items-center space-x-4 text-white/40 hover:text-gold transition-colors duration-500">
                                        <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all">
                                            <Circle size={4} className="fill-current" />
                                        </div>
                                        <span className="text-sm uppercase tracking-widest font-bold">{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-10">Protocols</h4>
                        <ul className="space-y-6">
                            {techLinks.map((item, idx) => (
                                <li key={idx} className="group">
                                    <Link to={item.path} className="flex items-center space-x-4 text-white/40 hover:text-gold transition-colors duration-500">
                                        <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all">
                                            <Circle size={4} className="fill-current" />
                                        </div>
                                        <span className="text-sm uppercase tracking-widest font-bold">{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                            <li className="group cursor-pointer" onClick={() => setIsFeedbackOpen(true)}>
                                <div className="flex items-center space-x-4 text-gold hover:text-white transition-all duration-500">
                                    <div className="w-6 h-6 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all">
                                        <Star size={8} className="fill-current" />
                                    </div>
                                    <span className="text-sm uppercase tracking-widest font-bold">Rate Architecture</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.3em] uppercase text-white/20 font-bold">
                    <p>© 2026 Uganda Showcase. Digital Architecture by Shillah Naigaga.</p>
                    <p className="mt-4 md:mt-0 text-center flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></div>
                        Portfolio: Content derived via official UWEC & UWA protocols
                    </p>
                </div>
            </div>

            <FeedbackModal
                isOpen={isFeedbackOpen}
                onClose={() => setIsFeedbackOpen(false)}
            />
        </footer>
    );
};

export default Footer;
