import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProgressiveImage from './ProgressiveImage';

const destinations = [
    {
        title: 'Bwindi Impenetrable',
        subtitle: 'Primate Haven',
        size: 'md:col-span-2 md:row-span-2',
        img: '/assets/bwindiDenseForest.jpg',
        description: 'Ancient sanctuary of the mountain gorilla and a UNESCO World Heritage site of unrivaled biodiversity.'
    },
    {
        title: 'Murchison Falls',
        subtitle: 'Hydraulic Power',
        size: 'md:col-span-1 md:row-span-1',
        img: '/assets/murchisionfallsAeriel.jpg',
        description: 'Where the world\'s longest river explodes through a 7-meter gorge into a thunderous basin.'
    },
    {
        title: 'Rwenzori Peaks',
        subtitle: 'Alpine Mystery',
        size: 'md:col-span-1 md:row-span-2',
        img: '/assets/snowCapedRwenzori.jpg',
        description: 'The mythical "Mountains of the Moon," offering glacial climbs on the equator.'
    },
    {
        title: 'The Nile Source',
        subtitle: 'Legacy River',
        size: 'md:col-span-1 md:row-span-1',
        img: '/assets/jinjaNile.jpg',
        description: 'The legendary origin of civilization, where Lake Victoria begins its journey north.'
    },
    {
        title: 'Kidepo Wilderness',
        subtitle: 'Pure Isolation',
        size: 'md:col-span-2 md:row-span-1',
        img: '/assets/kidepoValleyView.jpg',
        description: 'Africa\'s most ruggedly isolated savannah, home to the rarest cheetah lineages.'
    }
];

const BentoGrid = () => {
    return (
        <section className="section-padding bg-cream">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-gold uppercase tracking-[0.4em] font-bold text-[10px] mb-4">Curated Escapes</h4>
                        <h2 className="text-5xl md:text-7xl font-serif font-bold text-charcoal tracking-tighter">The Collection</h2>
                    </motion.div>
                    <p className="text-charcoal/40 text-[10px] font-bold uppercase tracking-[0.5em] mb-2">
                        Bespoke — Pristine — Infinite
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[300px]">
                    {destinations.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`${item.size} group relative rounded-[3rem] overflow-hidden border border-charcoal/5`}
                        >
                            <ProgressiveImage
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>

                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {item.subtitle}
                                </span>
                                <h3 className="text-2xl font-serif font-bold mb-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                                    {item.title}
                                </h3>
                                <div className="h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-700 delay-200 mb-4"></div>
                                <p className="text-xs text-white/70 font-light leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                                    {item.description}
                                </p>

                                <button className="absolute top-8 right-8 w-12 h-12 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0 hover:bg-gold hover:text-white">
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
