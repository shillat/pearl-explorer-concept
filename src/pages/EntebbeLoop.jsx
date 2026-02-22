import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, MapPin, Zap, Info, ArrowRight, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import ProgressiveImage from '../components/ProgressiveImage';

const EntebbeLoop = () => {
    const activities = [
        {
            time: 'Arrival (Anytime)',
            title: 'Touching Down at the Shore',
            desc: 'Your journey begins at Entebbe International (EBB). A private transfer sweeps you to a lakeside retreat for a first glimpse of the "Great Inland Sea."',
            icon: <MapPin className="text-gold" />
        },
        {
            time: '07:30 AM',
            title: 'The Shoebill Quest',
            desc: 'Traditional canoe excursion through the ancient papyrus of Mabamba Swamp in search of the prehistoric Shoebill Stork.',
            icon: <Zap className="text-gold" />
        },
        {
            time: '11:00 AM',
            title: 'Sunrise Walk at the Zoo (UWEC)',
            desc: 'Exclusive encounter with rescued wildlife and a deep dive into Uganda\'s conservation history.',
            icon: <Clock className="text-gold" />
        },
        {
            time: '01:30 PM',
            title: 'Victoria Luxury Brunch',
            desc: 'Traditional fusion cuisine served with sweeping views of the Lake Victoria horizon.',
            icon: <Info className="text-gold" />
        },
        {
            time: '04:00 PM',
            title: 'Ngamba Island Crossing',
            desc: 'A high-speed boat transit to the chimpanzee sanctuary island, witnessing rescue efforts in the middle of the lake.',
            icon: <ShieldCheck className="text-gold" />
        },
        {
            time: '06:15 PM',
            title: 'Equator Sunset Cruise',
            desc: 'Toasting to the voyage at the exact intersection of the two hemispheres as the sun dips below the fresh waters.',
            icon: <ArrowRight className="text-gold" />
        }
    ];

    return (
        <div className="bg-cream min-h-screen pt-32 pb-20 text-charcoal">
            <SEO
                title="Entebbe Loop | Transit Excellence"
                description="Experience the gateway to the Pearl. Curated lakeside retreats and efficient transit protocols."
            />
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.h4
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-gold uppercase tracking-[0.6em] font-bold text-[10px] mb-8"
                    >
                        Uganda's Green Gateway
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-[7rem] font-serif font-bold mb-10 leading-none tracking-tighter text-charcoal"
                    >
                        The Entebbe <span className="italic text-gold grad-gold">Loop</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-charcoal/50 text-xl leading-relaxed max-w-3xl mx-auto font-light"
                    >
                        As the landing site for all international flights, Entebbe is your first breath of the Pearl. We've curated a 24-hour journey that transforms a stopover into a <span className="text-charcoal">cinematic introduction to the pulse of Africa.</span>
                    </motion.p>
                </div>

                {/* Feature Section: UWEC */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 glass p-6 md:p-16 rounded-[3rem] border-charcoal/5 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[120px] -z-10 group-hover:bg-gold/10 transition-colors duration-1000"></div>

                    <div className="relative group overflow-hidden rounded-[2rem] border border-white/5 h-[600px] mb-12">
                        <ProgressiveImage
                            src="/assets/uwecSanctuary.jpg"
                            alt="UWEC Conservation Center"
                            className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-charcoal/[0.04] text-[8px] uppercase font-bold text-center p-12 tracking-[1em]">
                            UWEC Conservation Center
                        </div>
                        <div className="absolute top-6 left-6 glass-gold text-gold px-5 py-2 font-bold text-[10px] tracking-[0.3em] uppercase rounded-full">
                            Conservation Hero
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-charcoal">The Heart of Resilience</h2>
                        <p className="text-charcoal/60 mb-10 text-lg leading-relaxed font-light">
                            The Uganda Wildlife Conservation Education Centre (UWEC) is more than just a sanctuary; it is a world-class education hub dedicated to rescue and protection.
                        </p>
                        <div className="space-y-6 mb-12">
                            <div className="flex items-start space-x-5">
                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-gold/30 transition-colors">
                                    <ShieldCheck className="text-gold w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-charcoal font-bold text-sm uppercase tracking-widest mb-1">Rescued Heroes</h4>
                                    <p className="text-sm text-charcoal/40 leading-relaxed">Protecting animals saved from trafficking and human-wildlife conflict.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-5">
                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-gold/30 transition-colors">
                                    <Clock className="text-gold w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-charcoal font-bold text-sm uppercase tracking-widest mb-1">Impact Visits</h4>
                                    <p className="text-sm text-charcoal/40 leading-relaxed">Every tour funds rehabilitation and conservation efforts directly.</p>
                                </div>
                            </div>
                        </div>
                        <a
                            href="https://uwec.ug/reservations/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-premium rounded-full inline-flex items-center space-x-4 shadow-[0px_20px_25px_rgba(212,175,55,0.05)]"
                        >
                            <span>Official Booking Portal</span>
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </motion.div>

                {/* Itinerary Timeline */}
                <div className="max-w-4xl mx-auto mb-32">
                    <div className="text-center mb-20">
                        <h3 className="text-3xl font-serif font-bold italic grad-gold inline-block">— The Itinerary —</h3>
                    </div>
                    <div className="space-y-16">
                        {activities.map((act, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="flex space-x-8 md:space-x-16 relative group"
                            >
                                {/* Timeline connector */}
                                {index !== activities.length - 1 && (
                                    <div className="absolute top-12 left-[31px] md:left-[39px] w-[1px] h-[calc(100%+64px)] bg-gradient-to-b from-gold/50 to-transparent"></div>
                                )}

                                <div className="w-16 md:w-20 h-16 md:h-20 glass-gold rounded-full flex-shrink-0 flex items-center justify-center border-gold/20 group-hover:scale-110 transition-transform duration-500">
                                    <div className="text-gold scale-125">{act.icon}</div>
                                </div>
                                <div className="pt-4">
                                    <span className="text-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-3 block opacity-60">{act.time}</span>
                                    <h4 className="text-2xl md:text-3xl font-serif font-bold mb-4 group-hover:text-gold transition-colors duration-500 tracking-tight text-charcoal">{act.title}</h4>
                                    <p className="text-charcoal/40 text-lg leading-relaxed font-light max-w-2xl">{act.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div >
        </div >
    );
};

export default EntebbeLoop;
