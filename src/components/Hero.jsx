import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate here
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate(); // Initialize the navigate function here

    return (
        <section className="relative h-screen overflow-hidden bg-charcoal">
            {/* Cinematic Background Video */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale opacity-30 scale-105"
                >
                    <source src="/assets/heroVideo.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-[2px]"></div>
            </div>

            {/* Subtle gold ambient light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.04] blur-[180px] rounded-full z-[1] animate-soft-pulse"></div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="max-w-5xl"
                >
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.6em" }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="text-gold text-[10px] md:text-xs uppercase font-bold mb-8 block"
                    >
                        Premier Class Safaris
                    </motion.span>

                    <h1 className="text-6xl md:text-9xl font-serif font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                        The Soul of<br />
                        <span className="grad-gold animate-shimmer">Africa</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="text-white/50 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-12 tracking-wide uppercase italic"
                    >
                        Experience Uganda's most exclusive sanctuaries through a lens of curated luxury and deep cultural immersion.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8"
                    >
                        {/* Button 1 now works because navigate is defined above */}
                        <button
                            className="btn-premium rounded-full btn-hover-lift pop-effect cursor-pointer"
                            onClick={() => navigate('/escape')}
                        >
                            Begin Your Journey
                        </button>

                        {/* Button 2 updated to navigate as well */}
                        <button
                            className="text-white/60 font-bold uppercase tracking-widest text-[10px] hover:text-gold flex items-center space-x-2 group hover-lift pop-effect cursor-pointer"
                            onClick={() => navigate('/safari-circuit')}
                        >
                            <span>Explore Circuits</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Cinematic Gradients — fades to cream */}
            <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-cream to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-charcoal/50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-charcoal/50 to-transparent z-10 pointer-events-none"></div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-8 h-8 text-gold/30" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;