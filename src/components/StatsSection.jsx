import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Bug, Map, Users } from 'lucide-react';
import ProgressiveImage from './ProgressiveImage';

const stats = [
    { label: 'Saved from Trafficking', value: '450+', sub: 'Wildlife Rescues', icon: <ShieldCheck />, img: '/assets/uwecSanctuary.jpg' },
    { label: 'Species Protected', value: '1,000+', sub: 'Endangered Bio', icon: <Bug />, img: '/assets/kibaleChimpanzees.jpg' },
    { label: 'National Parks', value: '10', sub: 'Pristine Hubs', icon: <Map />, img: '/assets/kidepoValleyView.jpg' },
    { label: 'Conservation Heroes', value: '1.2M', sub: 'Yearly Support', icon: <Users />, img: '/assets/batwaForestTribe.png' },
];

const StatsSection = () => {
    return (
        <section className="section-padding bg-cream relative overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-12 rounded-[3.5rem] border border-charcoal/5 hover:border-gold/30 transition-all duration-700 group text-center"
                        >
                            <div className="text-gold mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
                                {React.cloneElement(stat.icon, { size: 40 })}
                            </div>
                            <h3 className="text-4xl font-serif font-bold text-charcoal mb-3 tracking-tighter italic">
                                {stat.value}
                            </h3>
                            <p className="text-charcoal/40 text-[10px] uppercase tracking-[0.4em] font-bold">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Subtle Gradient Accent */}
            <div className="absolute -bottom-64 -right-64 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>
        </section>
    );
};

export default StatsSection;
