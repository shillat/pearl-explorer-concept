import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import StatsSection from '../components/StatsSection';
import { motion } from 'framer-motion';
import { Quote, Shield, Globe, Award, Send } from 'lucide-react';
import ProgressiveImage from '../components/ProgressiveImage';

const homeSections = {
    // ... same as before
};

const Home = () => {
    return (
        <div className="bg-cream min-h-screen pt-32 pb-20 text-forest-green">
            <SEO
                title="The Premier Digital Concierge"
                description="Embark on a bespoke journey through Uganda's royal heritage and technical biological wonders."
            />

            {/* Hero Section */}
            <Hero />

            {/* Modern Asymmetric Intro */}
            <section className="section-padding-large relative">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-gold uppercase tracking-[0.4em] font-bold text-[10px] mb-4">Our Commitment</h4>
                            <h2 className="text-5xl md:text-7xl font-serif font-bold text-charcoal tracking-tighter">Stewardship</h2>
                        </motion.div>
                        <p className="text-charcoal/40 text-[10px] font-bold uppercase tracking-[0.5em] mb-2">
                            Conservation - Community - Legacy
                        </p>
                    </div>
                    <div className="asymmetric-grid items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="asymmetric-item-7 mb-12 lg:mb-0"
                        >
                            <h4 className="text-gold uppercase tracking-[0.6em] font-bold text-[10px] mb-8">The Vision</h4>
                            <h2 className="text-5xl md:text-8xl font-serif font-bold mb-10 leading-[0.9] tracking-tighter text-balance text-charcoal">
                                Where Wild <span className="italic text-gold grad-gold">Heritage</span> Meets Modern Luxury
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="asymmetric-item-5 lg:pl-12 relative"
                        >
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/10 blur-[100px] pointer-events-none"></div>
                            <p className="text-charcoal/50 text-xl leading-relaxed font-light mb-10 relative z-10">
                                Uganda is not just a destination; it's a profound encounter with the soul of the continent. We curate experiences that honor the delicate balance between high-end exploration and radical conservation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center relative z-10">
                                <Link
                                    to="/escape"
                                    className="btn-premium rounded-full"
                                >
                                    Explore Circuit
                                </Link>
                                <div className="flex -space-x-3 items-center">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-charcoal bg-forest/40 flex items-center justify-center text-[8px] font-bold glass overflow-hidden">
                                            <ProgressiveImage src={`/assets/bwindiMist.jpg`} className="w-full h-full object-cover opacity-60" />
                                        </div>
                                    ))}
                                    <span className="pl-4 text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">+12k Travelers</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Featured Visual for Intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-32 relative h-[500px] rounded-[4rem] overflow-hidden group border border-charcoal/5"
                    >
                        <ProgressiveImage
                            src="/assets/batwaForestTribe.png"
                            className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent"></div>
                        <div className="absolute bottom-12 left-12">
                            <h4 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-2">Heritage Focus</h4>
                            <p className="text-3xl font-serif italic text-white/80">The Keepers of the Forest</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="section-padding relative">
                <div className="container mx-auto">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-serif font-bold mb-8 typography-display"
                        >
                            Curated <span className="text-metallic-gold italic">Experiences</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-forest-green/50 text-lg max-w-2xl mx-auto typography-bold"
                        >
                            Discover Uganda's most exclusive destinations, each telling a unique story of luxury, conservation, and cultural heritage.
                        </motion.p>
                    </div>

                    <BentoGrid />
                </div>
            </section>

            {/* Stats Section */}
            <StatsSection />

            {/* CTA Section */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vibrant-gold rounded-full mix-blend-overlay filter blur-[100px]"></div>
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="text-center">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl font-serif font-bold mb-6 typography-display"
                        >
                            Ready for Your <span className="text-metallic-gold italic">Adventure</span>?
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-forest-green/50 mb-10 max-w-xl mx-auto typography-bold"
                        >
                            Begin crafting your bespoke Ugandan journey with our expert guidance and insider knowledge.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link to="/escape" className="btn-premium rounded-full text-midnight-slate px-12 py-6 vibrant-glow">
                                <span>Design Your Escape</span>
                                <Send size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Commitment Section: Dark Accent Band */}
            <section className="section-padding relative overflow-hidden section-dark">
                {/* Background Visual for Stewardship */}
                <div className="absolute inset-0 z-0">
                    <ProgressiveImage src="/assets/kidepoValleyView.jpg" alt="Stewardship Background" className="w-full h-full object-cover grayscale opacity-[0.05]" />
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-20 px-6">
                        <motion.h4
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-gold uppercase tracking-[0.6em] font-bold text-[10px] mb-6"
                        >
                            The Standard of Stewardship
                        </motion.h4>
                        <h3 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic leading-tight text-white">Our Commitment to <span className="text-gold grad-gold">Resilience</span></h3>
                        <p className="text-white/40 text-xl font-light italic max-w-2xl mx-auto">Uganda Showcase operates in direct alignment with national conservation protocols, ensuring every journey leaves a legacy.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                        {/* 1. Conservation Focus (UWEC) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="glass py-20 px-10 rounded-[3rem] border border-white/[0.06] hover:border-gold/30 hover-gold-glow group text-center transition-all duration-700 flex flex-col items-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                                <Shield className="w-32 h-32 text-gold rotate-12" />
                            </div>
                            <div className="w-24 h-24 glass rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-all duration-500 border border-white/10 group-hover:border-gold/40 shadow-2xl">
                                <Shield className="text-gold w-10 h-10" />
                            </div>
                            <h4 className="text-white font-bold text-xl mb-6 uppercase tracking-[0.2em]">UWEC Conservation</h4>
                            <p className="text-white/40 text-sm leading-relaxed font-light italic mb-10">Supporting wildlife rescue, rehabilitation, and environmental education at the heart of Entebbe.</p>
                            <a
                                href="https://uwec.ug/about/what-we-do/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center space-x-3 text-gold text-[10px] font-bold uppercase tracking-widest hover:tracking-[0.4em] transition-all duration-500"
                            >
                                <span>Official Protocol</span>
                                <div className="w-1 h-1 rounded-full bg-gold"></div>
                            </a>
                        </motion.div>

                        {/* 2. Community Conservation (UWA) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="glass py-20 px-10 rounded-[3rem] border border-white/[0.06] hover:border-white/20 group text-center transition-all duration-500 flex flex-col items-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                                <Globe className="w-32 h-32 text-gold -rotate-12" />
                            </div>
                            <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mb-10 group-hover:scale-105 transition-all duration-300 border border-white/10">
                                <Globe className="text-gold w-10 h-10" />
                            </div>
                            <h4 className="text-white font-bold text-xl mb-6 uppercase tracking-[0.2em]">UWA Community</h4>
                            <p className="text-white/40 text-sm leading-relaxed font-light italic mb-10">Our community conservation model ensures local host communities benefit directly from sustainable tourism.</p>
                            <a
                                href="https://ugandawildlife.org/revenue-sharing/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center space-x-3 text-gold text-[10px] font-bold uppercase tracking-widest hover:tracking-[0.4em] transition-all duration-500"
                            >
                                <span>Learn More</span>
                                <div className="w-1 h-1 rounded-full bg-gold"></div>
                            </a>
                        </motion.div>

                        {/* 3. Resource Stewardship (UWA) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass py-20 px-10 rounded-[3rem] border border-white/[0.06] hover:border-white/20 group text-center transition-all duration-500 flex flex-col items-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                                <Award className="w-32 h-32 text-gold rotate-45" />
                            </div>
                            <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mb-10 group-hover:scale-105 transition-all duration-300 border border-white/10">
                                <Award className="text-gold w-10 h-10" />
                            </div>
                            <h4 className="text-white font-bold text-xl mb-6 uppercase tracking-[0.2em]">Resource Legacy</h4>
                            <p className="text-white/40 text-sm leading-relaxed font-light italic mb-10">We strictly follow resource management guidelines to preserve Uganda's biological diversity for future generations.</p>
                            <a
                                href="https://ugandawildlife.org/wildlife-research/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center space-x-3 text-gold text-[10px] font-bold uppercase tracking-widest hover:tracking-[0.4em] transition-all duration-500"
                            >
                                <span>Explore Ethics</span>
                                <div className="w-1 h-1 rounded-full bg-gold"></div>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials section */}
            <section className="section-padding-large bg-cream relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="glass-gold p-12 md:p-24 rounded-[4rem] border-gold/10 relative overflow-hidden group">
                        <div className="absolute inset-0 z-0">
                            <ProgressiveImage src="/assets/sipiFalls.jpg" className="w-full h-full object-cover grayscale opacity-[0.03] group-hover:scale-110 transition-transform duration-[20s]" />
                        </div>
                        <Quote className="absolute -top-10 -left-10 w-64 h-64 text-gold/[0.03] rotate-12" />
                        <div className="relative z-10 text-center max-w-4xl mx-auto">
                            <div className="flex justify-center space-x-1 mb-10">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold"></div>)}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif italic font-medium leading-tight mb-12 text-charcoal/90">
                                "The most profound connection I've ever felt with nature. Uganda is a masterpiece, and this journey was the frame it deserved."
                            </h2>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full border-2 border-gold/20 mb-6 glass overflow-hidden">
                                    <ProgressiveImage src="/assets/bwindiDenseForest.jpg" className="w-full h-full object-cover" />
                                </div>
                                <h4 className="text-charcoal font-bold tracking-widest uppercase text-xs mb-2">Elena Vance</h4>
                                <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold italic">Executive Explorer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium CTA — Dark Dramatic Close */}
            <section className="py-72 relative overflow-hidden text-center section-dark">
                <div className="absolute inset-0 z-0">
                    <ProgressiveImage
                        src="/assets/murchisionfallsAeriel.jpg"
                        alt="The Nile"
                        className="w-full h-full object-cover grayscale opacity-20"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="container mx-auto px-6 relative z-10"
                >
                    <h2 className="text-5xl md:text-[9rem] font-serif font-bold mb-12 tracking-tighter leading-none text-white">
                        Your Bespoke <br /> <span className="italic text-gold grad-gold">Journey</span> <br /> Starts Here.
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-20">
                        <Link
                            to="/escape"
                            className="btn-premium rounded-full px-16 py-6 text-sm tracking-[0.3em]"
                        >
                            Book Your Trip
                        </Link>
                        <Link
                            to="/safari-circuit"
                            className="glass px-12 py-6 rounded-full font-bold tracking-[0.3em] uppercase text-[10px] border border-white/10 hover:border-gold/50 transition-all duration-500 text-white/60"
                        >
                            Explore The Collection
                        </Link>
                    </div>
                </motion.div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/5 blur-[250px] rounded-full -z-10 animate-pulse"></div>
            </section>
        </div>
    );
};

export default Home;
