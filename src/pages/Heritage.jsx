import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Eye, Heart, Anchor, Award, Info } from 'lucide-react';
import SEO from '../components/SEO';
import ProgressiveImage from '../components/ProgressiveImage';

const heritageItems = [
    {
        title: "The Batwa Trail",
        category: "Ancient Keepers",
        short: "Discover the ancient secrets of the forest with the Batwa Pygmies, the original inhabitants of Bwindi.",
        story: "For millennia, the Batwa lived as hunter-gatherers in the primeval forests of Bwindi. Known as the 'Keepers of the Forest,' they developed a profound knowledge of herbal medicine, ancient survival techniques, and spiritual rituals. The Batwa Trail isn't just a walk; it's a window into a lifestyle that remained unchanged for thousands of years, until the forest became a protected world heritage site.",
        icon: <Heart className="text-gold" />,
        img: '/assets/batwaForestTribe.png'
    },
    {
        title: "The Bagisu Imbalu",
        category: "Sacred Rite",
        short: "The powerful transition from boyhood to manhood among the people of Mount Elgon.",
        story: "Every even-numbered year, the slopes of Mount Elgon transform into a theater of ancient tradition. The Imbalu ceremony is a public rite of passage where young men face the knife with unflinching courage. Accompanied by the 'Kadodi' drum rhythms that can be heard for miles, this tradition defines the strength and identity of the Bagisu people, connecting them to their ancestors through blood and grit.",
        icon: <Award className="text-gold" />,
        img: '/assets/bagisuImbalu.png'
    },
    {
        title: "Buganda Kingdom",
        category: "Royal Legacy",
        short: "Explore the rich history of one of Africa's oldest monarchies and its sophisticated administration.",
        story: "The Buganda Kingdom remains the beating heart of central Uganda. With a history stretching back to the 14th century, the Ganda people developed one of the most sophisticated administrative systems in pre-colonial Africa. From the sacred fire that never goes out at the Bulange to the intricate clan system that governs social life, the Kingdom is a testament to African statehood and cultural resilience.",
        icon: <Award className="text-gold" />,
        img: '/assets/bagandaKingdom.png'
    },
    {
        title: "The Craft of Barkcloth",
        category: "UNESCO Asset",
        short: "Witness the art of making cloth from the Mutuba tree, a tradition spanning centuries.",
        story: "Long before cotton arrived, the people of Uganda wore the forest. Barkcloth making is a labor-intensive art where the inner bark of the Mutuba tree is beaten with wooden mallets for hours until it soft, terracotta-colored, and durable. Recognized by UNESCO as a Masterpiece of the Intangible Heritage of Humanity, it is still used today in royal coronations and sacred ceremonies.",
        icon: <Eye className="text-gold" />,
        img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80'
    },
    {
        title: "Karamojong Manyattas",
        category: "Nomadic Spirit",
        short: "The resilient cattle keepers of the northeast and their unique architecture.",
        story: "In the rugged wilderness of Kidepo, the Karamojong maintain a life deeply intertwined with their cattle. They live in 'Manyattas'—intricately fenced homesteads designed for protection and community. Their culture, defined by vibrant beadwork and a deep spiritual connection to the land, represents one of the most authentic and untouched nomadic lifestyles remaining in East Africa.",
        icon: <Anchor className="text-gold" />,
        img: '/assets/karamojongManyattas.png'
    },
    {
        title: "Katwe Salt Mines",
        category: "Artisanal Legacy",
        short: "A centuries-old tradition of salt mining in the volcanic craters of Queen Elizabeth.",
        story: "In the shadow of the Rwenzori mountains, the inhabitants of Katwe have harvested salt from a volcanic crater lake since the 16th century. Using techniques passed down through generations, miners navigate the saline waters to extract crystals. It's a grueling but beautiful legacy of human adaptation to a volcanic landscape, providing salt that reaches far across the borders of East Africa.",
        icon: <Anchor className="text-gold" />,
        img: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80'
    }
];

const HeritageModal = ({ item, isOpen, onClose }) => {
    if (!item) return null;
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-charcoal/90 backdrop-blur-xl"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        className="glass-gold w-full max-w-2xl p-12 md:p-20 rounded-[4rem] relative z-20 text-center"
                    >
                        <div className="w-24 h-24 glass-gold rounded-full flex items-center justify-center mx-auto mb-10">
                            <div className="scale-150">{item.icon}</div>
                        </div>
                        <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">{item.category}</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 italic text-charcoal">{item.title}</h2>
                        <p className="text-charcoal/60 text-xl leading-relaxed font-light mb-12">
                            {item.story}
                        </p>
                        <button
                            onClick={onClose}
                            className="btn-premium rounded-full"
                        >
                            Back to Heritage
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};


const Heritage = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="bg-cream pt-32 min-h-screen text-charcoal">
            <SEO
                title="Cultural Heritage | Sacred Stories"
                description="Uncover the tapestry of Uganda's diverse cultures, from royal kingdoms to ancient forest traditions."
            />
            <div className="container mx-auto px-6 md:px-12 mb-30">
                <div className="asymmetric-grid items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="asymmetric-item-7"
                    >
                        <h4 className="text-gold uppercase tracking-[0.6em] font-bold text-[10px] mb-8">Cultural Immersion</h4>
                        <h1 className="text-6xl md:text-[8rem] font-serif font-bold mb-10 leading-[0.85] tracking-tighter text-balance text-charcoal">
                            Legacy of <br /> <span className="italic text-gold grad-gold">The Pearl</span>
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="asymmetric-item-5 lg:pl-12"
                    >
                        <p className="text-charcoal/40 text-xl font-light leading-relaxed">
                            Uganda is more than its landscapes; it is a tapestry of over 50 distinct cultures. From royal lineages to ancient forest traditions, we invite you to hear the stories that defined East Africa.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {heritageItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass rounded-[3.5rem] border-charcoal/5 group hover-gold-glow flex flex-col overflow-hidden min-h-[600px] relative"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 z-0">
                                <ProgressiveImage
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000 transform group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent"></div>
                            </div>

                            <div className="relative z-10 p-12 flex flex-col items-center text-center justify-between h-full flex-grow">
                                <div className="w-20 h-20 glass-gold rounded-full flex items-center justify-center mb-10 group-hover:scale-125 transition-transform duration-700">
                                    {item.icon}
                                </div>
                                <div>
                                    <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">{item.category}</span>
                                    <h3 className="text-4xl font-serif font-bold mb-6 italic text-charcoal">{item.title}</h3>
                                    <p className="text-charcoal/40 text-lg leading-relaxed font-light max-w-sm mx-auto line-clamp-3">
                                        {item.short}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedItem(item)}
                                    className="mt-12 text-gold uppercase tracking-widest text-[10px] font-bold border-b border-gold/30 pb-2 hover:text-white hover:border-white transition-all"
                                >
                                    Read The Story
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Visual Break with Official CTA */}
            <section className="py-48 bg-forest/10 border-y border-white/5 relative overflow-hidden mt-32">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h4 className="text-gold uppercase tracking-[0.6em] font-bold text-[10px] mb-12">Conservation Authority</h4>
                    <h2 className="text-4xl md:text-7xl font-serif font-bold mb-12 max-w-5xl mx-auto leading-[0.9] tracking-tighter text-charcoal">
                        Protecting the <span className="italic text-gold grad-gold">Natural & Cultural</span> Heritage of Uganda
                    </h2>
                    <p className="text-charcoal/40 text-xl font-light mb-16 max-w-3xl mx-auto">
                        While we celebrate these stories, the scientific and educational safeguarding of Uganda's biodiversity rests with the official national authorities.
                    </p>
                    <a
                        href="https://uwec.ug/about/the-education-center/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-premium rounded-full inline-flex items-center space-x-6 px-12"
                    >
                        <span>Official Conservation Portal</span>
                        <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                            <Award size={16} />
                        </div>
                    </a>
                </div>
                <Anchor className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-gold/[0.02] -z-10" />
            </section>

            <HeritageModal
                item={selectedItem}
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
            />
        </div>
    );
};

export default Heritage;
