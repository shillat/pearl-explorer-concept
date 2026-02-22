import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProgressiveImage = ({ src, alt, className, style }) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!src) return;

        const img = new Image();
        img.src = src;
        img.onload = () => setLoaded(true);
        img.onerror = () => setError(true);
    }, [src]);

    return (
        <div className={`relative overflow-hidden ${className}`} style={style}>
            <AnimatePresence>
                {!loaded && !error && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-cream/40 backdrop-blur-sm"
                    >
                        <motion.div
                            animate={{
                                x: ['-100%', '100%'],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "linear",
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent w-full h-full"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.img
                src={src}
                alt={alt}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{
                    opacity: loaded ? 1 : 0,
                    scale: loaded ? 1 : 1.05
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`w-full h-full object-cover ${!loaded ? 'hidden' : ''}`}
            />

            {error && (
                <div className="absolute inset-0 bg-charcoal/5 flex items-center justify-center p-4 text-center">
                    <span className="text-[10px] uppercase font-bold text-charcoal/20 tracking-widest text-balance">
                        Asset pending ground clearance
                    </span>
                </div>
            )}
        </div>
    );
};

export default ProgressiveImage;
