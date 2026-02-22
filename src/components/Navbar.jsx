import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Safari Circuit', path: '/safari-circuit' },
        { name: 'Entebbe Loop', path: '/entebbe-loop' },
        { name: 'Heritage', path: '/heritage' },
        { name: 'Toolkit', path: '/toolkit' },
    ];

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-300 py-6 bg-transparent`}
            >
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <Compass className="w-10 h-10 text-metallic-gold group-hover:rotate-180 transition-transform duration-1000 ease-in-out" />
                            <div className="absolute inset-0 bg-metallic-gold/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                        </div>
                        <span className="text-2xl font-serif font-bold tracking-tighter leading-none text-black transition-colors duration-300">
                            UGANDA<br />
                            <span className="text-[10px] uppercase tracking-[0.5em] text-metallic-gold font-sans font-bold">Showcase</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex space-x-12 items-center">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 relative group ${isActive ? 'text-metallic-gold' : 'text-black hover:text-metallic-gold'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}
                                        <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[1px] bg-gold transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}></span>
                                    </>
                                )}
                            </NavLink>
                        ))}
                        <Link
                            to="/escape"
                            className="btn-premium rounded-full text-midnight-slate"
                        >
                            The Escape
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden transition-colors duration-300 text-black" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 w-full glass p-6 md:hidden"
                        >
                            <div className="flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `text-lg font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-metallic-gold' : 'text-black hover:text-metallic-gold'
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}
                                <Link
                                    to="/escape"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-metallic-gold text-midnight-slate px-6 py-3 rounded-full font-bold uppercase tracking-tighter text-center"
                                >
                                    Book Escape
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;
