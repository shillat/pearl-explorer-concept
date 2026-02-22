import React, { useState } from 'react';
import SEO from '../components/SEO';
import ProgressiveImage from '../components/ProgressiveImage';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X, ArrowRight, Check, Compass, Users, Sparkles, Send,
    ExternalLink, MapPin, Calendar, Briefcase
} from 'lucide-react';

const Escape = () => {
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState({
        theme: '',
        attraction: '',
        vibe: '',
        travelers: 1,
        contact: { name: '', email: '' }
    });

    const destinationMap = {
        'bwindi-luxury': {
            name: 'Sanctuary Gorilla Forest Camp',
            desc: 'The only luxury camp located deep inside Bwindi Impenetrable National Park, offering direct gorilla trekking access.',
            url: 'https://www.abercrombiekent.com/uganda/bwindi-impenetrable-forest/sanctuary-gorilla-forest-camp',
            img: '/assets/bwindiMist.jpg'
        },
        'bwindi-adventure': {
            name: 'UWA Bwindi Outpost',
            desc: 'Official Uganda Wildlife Authority permits and research-focused lodging in the heart of the mist.',
            url: 'https://ugandawildlife.org/'
        },
        'kidepo-luxury': {
            name: 'Apoka Safari Lodge',
            desc: 'Remote luxury in the rugged Narus Valley, where the wild pulse of Kidepo is felt at every sunrise.',
            url: 'https://wildplacesafrica.com/our-lodges/apoka-safari-lodge/',
            img: '/assets/kidepoValleyView.jpg'
        },
        'murchison-luxury': {
            name: 'Nile Safari Lodge',
            desc: 'An ultra-exclusive eco-luxury experience overlooking the mighty Nile and Murchison Falls.',
            url: 'https://nilesafarilodge.com/',
            img: '/assets/murchisionfallsAeriel.jpg'
        },
        'murchison-adventure': {
            name: 'UWEC Sanctuary Cottages',
            desc: 'Official UWEC lodging and conservation-led safaris across the northern circuit.',
            url: 'https://uwec.ug/reservations/'
        },
        'kibale-luxury': {
            name: 'Kyaninga Lodge',
            desc: 'Set against the backdrop of a stunning volcanic crater lake, offering the ultimate luxury gateway to the chimpanzees of Kibale.',
            url: 'https://www.kyaningalodge.com/'
        },
        'kibale-adventure': {
            name: 'Kibale Forest Camp',
            desc: 'Official-tier tented camping experience deep within the primate capital, perfect for trackers and birders.',
            url: 'https://www.naturelodges.biz/kibale-forest-camp/'
        },
        'mgahinga-luxury': {
            name: 'Mount Gahinga Lodge',
            desc: 'A premium sanctuary at the base of the volcanoes, providing exclusive access to the golden monkeys and gorillas of Mgahinga.',
            url: 'https://volcanoessafaris.com/mount-gahinga-lodge/'
        },
        'mgahinga-adventure': {
            name: 'UWA Mgahinga Outpost',
            desc: 'Rugged park-adjacent lodging focused on high-altitude volcano hiking and rare primate tracking.',
            url: 'https://ugandawildlife.org/'
        },
        'queen-luxury': {
            name: 'Kyambura Gorge Lodge',
            desc: 'Bespoke luxury converted from an old coffee store, overlooking the spectacular "Valley of Apes" and the savannah peaks.',
            url: 'https://volcanoessafaris.com/kyambura-gorge-lodge/'
        },
        'queen-adventure': {
            name: 'Mweya Hostels & Bandas',
            desc: 'Official budget-friendly conservation lodging at the heart of the Kazinga Channel circuit.',
            url: 'https://ugandawildlife.org/'
        },
        'mburo-luxury': {
            name: 'Mihingo Lodge',
            desc: 'An eco-luxury retreat perched on a granite outcropping with 360-degree views of the park where zebras roam free.',
            url: 'https://mihingo-lodge.com/'
        },
        'mburo-adventure': {
            name: 'Rwonyo Rest Camp',
            desc: 'Official safari tents and bandas managed by UWA, offering an authentic close-to-nature savannah experience.',
            url: 'https://ugandawildlife.org/'
        },
        'uwec-luxury': {
            name: 'Official Sanctuary Cottages',
            desc: 'Premium eco-cottages within the UWEC sanctuary grounds, where you wake up to the sounds of rescued wildlife.',
            url: 'https://uwec.ug/reservations/'
        },
        'uwec-adventure': {
            name: 'Entebbe Conservation Bandas',
            desc: 'Authentic conservation lodging at the heart of the Uganda Wildlife Conservation Education Centre.',
            url: 'https://uwec.ug/reservations/'
        },
        'heritage-luxury': {
            name: 'Hotel No.5 Entebbe',
            desc: 'A stylish boutique retreat offering the highest levels of service and comfort, serving as a gateway to heritage sites.',
            url: 'https://www.wildfrontiers.com/hotel-no-5-entebbe/'
        },
        'heritage-adventure': {
            name: 'UWEC Heritage Centre',
            desc: 'Immersive cultural and conservation programming at the official Uganda Wildlife Education Centre.',
            url: 'https://uwec.ug/reservations/'
        },
        'semuliki-luxury': {
            name: 'Semliki Safari Lodge',
            desc: 'A secluded oasis in the Albertine Rift, offering a world-class birding and primate experience in a lush valley.',
            url: 'https://wildplacesafrica.com/our-lodges/semliki-safari-lodge/'
        },
        'semuliki-adventure': {
            name: 'Sempaya Hot Springs Camp',
            desc: 'Rugged camping at the heart of the hot springs and lowland forest, perfect for serious birders.',
            url: 'https://ugandawildlife.org/'
        },
        'karamojong-luxury': {
            name: 'Kidepo Wilderness Camps',
            desc: 'High-end mobile camps that move with the pulse of the Manyattas and the migrating herds.',
            url: 'https://ugandawildlife.org/'
        },
        'karamojong-adventure': {
            name: 'Kara-Tunga Arts Center',
            desc: 'Official cultural immersion camp in Moroto, celebrating the resilient nomadic heritage of the northeast.',
            url: 'https://www.kara-tunga.com/'
        },
        'nyero-luxury': {
            name: 'Soroti Rock Hotel',
            desc: 'Premium regional hospitality providing a comfortable base to explore the prehistoric rock art of Nyero.',
            url: 'https://ugandawildlife.org/'
        },
        'nyero-adventure': {
            name: 'Nyero Heritage Bandas',
            desc: 'Eco-conscious lodging maintained by the local community at the foot of the ancient granite paintings.',
            url: 'https://ugandawildlife.org/'
        }
    };

    const themes = [
        { id: 'primes', label: 'Gorilla & Primate Trekking', icon: <Compass className="text-gold" />, desc: 'Bwindi & Kibale Forests', img: '/assets/batwaForestTribe.png' },
        { id: 'wild', label: 'Savannah & Nile Safari', icon: <Sparkles className="text-gold" />, desc: 'Murchison & Kidepo Valley', img: '/assets/murchisionfallsAeriel.jpg' },
        { id: 'culture', label: 'Ugandan Heritage & Community', icon: <Users className="text-gold" />, desc: 'Royal Sites & Conservation', img: '/assets/bagandaKingdom.png' }
    ];

    const attractions = {
        'primes': [
            { id: 'bwindi', label: 'Bwindi Impenetrable', desc: 'Home of the Mountain Gorillas' },
            { id: 'kibale', label: 'Kibale Forest', desc: 'The Primate Capital' },
            { id: 'mgahinga', label: 'Mgahinga Volcanoes', desc: 'Golden Monkeys & Hidden Peaks' },
            { id: 'semuliki', label: 'Semuliki Valley', desc: 'Lowland Primate Oasis' }
        ],
        'wild': [
            { id: 'murchison', label: 'Murchison Falls', desc: 'The Nile\'s Power' },
            { id: 'kidepo', label: 'Kidepo Valley', desc: 'Rugged Isolation' },
            { id: 'queen', label: 'Queen Elizabeth', desc: 'The Lion\'s Savannah' },
            { id: 'mburo', label: 'Lake Mburo', desc: 'The Zebra Whispers' }
        ],
        'culture': [
            { id: 'heritage', label: 'Heritage Sites', desc: 'Kingdoms & UNESCO Assets' },
            { id: 'uwec', label: 'Entebbe Conservation', desc: 'The Pulse of UWEC' },
            { id: 'kasubi', label: 'Kasubi Royal Tombs', desc: 'Spiritual Heart of Buganda' },
            { id: 'igongo', label: 'Igongo Cultural Centre', desc: 'The Ankole Royal Legacy' },
            { id: 'karamojong', label: 'Karamojong Manyattas', desc: 'Nomadic Cattle Keepers' },
            { id: 'nyero', label: 'Nyero Rock Paintings', desc: 'Prehistoric Granite Art' }
        ]
    };

    const vibes = [
        { id: 'luxury', label: 'Quiet Luxury', desc: 'Refined, slow-paced, absolute comfort.' },
        { id: 'adventure', label: 'Rugged Discovery', desc: 'Active exploration, closer to the pulse.' }
    ];

    const getTarget = () => {
        const key = `${selections.attraction}-${selections.vibe}`;
        const fallback = selections.theme === 'culture' ? 'heritage-adventure' : 'bwindi-luxury';
        return destinationMap[key] || destinationMap[`${selections.attraction}-luxury`] || destinationMap[fallback];
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div className="bg-cream min-h-screen pt-32 pb-20 text-charcoal">
            <SEO
                title="The Escape | Intelligent Journey Designer"
                description="Use our bespoke designer to curate a path through the Pearl of Africa that resonates with your personal narrative."
            />
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.h4
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-gold uppercase tracking-[0.6em] font-bold text-[10px] mb-4"
                        >
                            The Journey Designer
                        </motion.h4>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-serif font-bold italic text-charcoal mb-6"
                        >
                            The <span className="text-gold grad-gold">Escape</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-charcoal/40 text-sm max-w-xl mx-auto leading-relaxed italic"
                        >
                            An intelligent journey designer. By analyzing your aesthetic preferences and logistical rhythm, we curate a path through the Pearl of Africa that resonates with your personal narrative.
                        </motion.p>
                    </div>

                    {/* Progress */}
                    <div className="flex space-x-2 mb-20 max-w-md mx-auto">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div
                                key={i}
                                className={`h-1 flex-grow rounded-full transition-all duration-700 ${i <= step ? 'bg-gold shadow-[0px_0px_10px_rgba(212,175,55,0.5)]' : 'bg-charcoal/5'
                                    }`}
                            />
                        ))}
                    </div>

                    <div className="min-h-[500px]">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h2 className="text-4xl font-serif font-bold mb-12 italic text-center text-charcoal">Choose Your Narrative</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {themes.map(t => (
                                            <button
                                                key={t.id}
                                                onClick={() => { setSelections({ ...selections, theme: t.id }); nextStep(); }}
                                                className="glass rounded-[3rem] text-center hover-gold-glow group transition-all overflow-hidden relative min-h-[300px]"
                                            >
                                                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                                                    <ProgressiveImage src={t.img} alt={t.label} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/80 to-transparent"></div>
                                                </div>
                                                <div className="relative z-10 p-10 flex flex-col items-center justify-center h-full">
                                                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                                        {t.icon}
                                                    </div>
                                                    <h4 className="text-[11px] font-bold uppercase tracking-widest mb-2 text-charcoal">{t.label}</h4>
                                                    <p className="text-[10px] text-charcoal/30 uppercase tracking-widest italic">{t.desc}</p>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h2 className="text-4xl font-serif font-bold mb-12 italic text-center text-charcoal">Select Your Focal Point</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                        {attractions[selections.theme]?.map(a => (
                                            <button
                                                key={a.id}
                                                onClick={() => { setSelections({ ...selections, attraction: a.id }); nextStep(); }}
                                                className="glass p-8 rounded-[2rem] text-left hover-gold-glow group transition-all"
                                            >
                                                <h4 className="text-lg font-bold uppercase tracking-widest mb-2 text-charcoal">{a.label}</h4>
                                                <p className="text-[10px] text-charcoal/30 uppercase tracking-widest italic">{a.desc}</p>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="text-center mt-12">
                                        <button onClick={prevStep} className="text-charcoal/30 text-[10px] uppercase font-bold hover:text-charcoal transition-colors tracking-widest">Back to Themes</button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h2 className="text-4xl font-serif font-bold mb-12 italic text-center text-charcoal">Desired Rhythm</h2>
                                    <div className="max-w-2xl mx-auto space-y-6">
                                        {vibes.map(v => (
                                            <button
                                                key={v.id}
                                                onClick={() => { setSelections({ ...selections, vibe: v.id }); nextStep(); }}
                                                className="w-full glass p-10 rounded-[2.5rem] text-left hover-gold-glow flex justify-between items-center group transition-all"
                                            >
                                                <div>
                                                    <h4 className="text-xl font-bold uppercase tracking-widest mb-2 text-charcoal">{v.label}</h4>
                                                    <p className="text-charcoal/40 text-sm font-light leading-relaxed">{v.desc}</p>
                                                </div>
                                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all">
                                                    <ArrowRight size={20} />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="text-center mt-12">
                                        <button onClick={prevStep} className="text-charcoal/30 text-[10px] uppercase font-bold hover:text-charcoal transition-colors tracking-widest">Back to Focal Point</button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="text-center"
                                >
                                    <h2 className="text-4xl font-serif font-bold mb-16 italic text-white">The Gathering</h2>
                                    <div className="flex items-center justify-center space-x-12 mb-20">
                                        <button
                                            onClick={() => selections.travelers > 1 && setSelections({ ...selections, travelers: selections.travelers - 1 })}
                                            className="w-20 h-20 glass rounded-full flex items-center justify-center text-3xl text-charcoal hover:text-gold hover:border-gold/30 transition-all font-light"
                                        >
                                            -
                                        </button>
                                        <div className="relative">
                                            <span className="text-9xl font-serif font-bold grad-gold tracking-tighter">{selections.travelers}</span>
                                            <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-charcoal/20 font-bold whitespace-nowrap">Distinguished Travelers</p>
                                        </div>
                                        <button
                                            onClick={() => setSelections({ ...selections, travelers: selections.travelers + 1 })}
                                            className="w-20 h-20 glass rounded-full flex items-center justify-center text-3xl text-charcoal hover:text-gold hover:border-gold/30 transition-all font-light"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="pt-12">
                                        <button onClick={nextStep} className="btn-premium rounded-full px-20 text-sm uppercase tracking-widest font-bold">Confirm Size</button>
                                        <br />
                                        <button onClick={prevStep} className="mt-12 text-charcoal/30 text-[10px] uppercase font-bold hover:text-charcoal transition-colors tracking-widest">Back</button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 5 && (
                                <motion.div
                                    key="step5"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="max-w-xl mx-auto"
                                >
                                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 italic leading-tight text-charcoal text-center">Seal the Vision.</h2>
                                    <div className="space-y-8 glass p-10 md:p-12 rounded-[3.5rem] border-charcoal/5">
                                        <div className="group">
                                            <label className="text-[10px] uppercase tracking-widest text-charcoal/30 mb-4 block font-bold transition-colors group-focus-within:text-gold">Full Name</label>
                                            <input
                                                type="text"
                                                value={selections.contact.name}
                                                onChange={(e) => setSelections({ ...selections, contact: { ...selections.contact, name: e.target.value } })}
                                                className="w-full bg-charcoal/[0.02] border-b border-charcoal/10 p-4 focus:outline-none focus:border-gold transition-all font-serif text-2xl text-charcoal placeholder-charcoal/5"
                                                placeholder="e.g. Shillah Naigaga"
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="text-[10px] uppercase tracking-widest text-charcoal/30 mb-4 block font-bold transition-colors group-focus-within:text-gold">Secure Channel (Email)</label>
                                            <input
                                                type="email"
                                                value={selections.contact.email}
                                                onChange={(e) => setSelections({ ...selections, contact: { ...selections.contact, email: e.target.value } })}
                                                className="w-full bg-charcoal/[0.02] border-b border-charcoal/10 p-4 focus:outline-none focus:border-gold transition-all font-serif text-2xl text-charcoal placeholder-charcoal/5"
                                                placeholder="shillahnaiga@gmail.com"
                                            />
                                        </div>
                                        <button
                                            onClick={() => nextStep()}
                                            disabled={!selections.contact.name || !selections.contact.email}
                                            className="btn-premium rounded-full w-full py-6 mt-8 flex justify-between items-center px-12 disabled:opacity-20 transition-all font-bold uppercase tracking-widest text-xs"
                                        >
                                            <span>Finalize Selection</span>
                                            <Send size={18} />
                                        </button>
                                    </div>
                                    <div className="text-center mt-12">
                                        <button onClick={prevStep} className="text-charcoal/30 text-[10px] uppercase font-bold hover:text-charcoal transition-colors tracking-widest">Adjust Gathering</button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 6 && (
                                <motion.div
                                    key="step6"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center"
                                >
                                    <div className="w-24 h-24 glass-gold rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0px_0px_50px_rgba(212,175,55,0.3)]">
                                        <Check className="text-gold w-10 h-10" />
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic text-charcoal flex flex-col md:flex-row items-center justify-center md:space-x-4">
                                        <span>The Pulse is set,</span>
                                        <span className="text-gold grad-gold">{selections.contact.name.split(' ')[0]}.</span>
                                    </h2>
                                    <p className="text-charcoal/40 text-xl font-light leading-relaxed max-w-2xl mx-auto mb-16">
                                        We've analyzed your aesthetic and logistical profile. Your designated sanctuary in the Pearl of Africa awaits.
                                    </p>

                                    <div className="max-w-4xl mx-auto glass rounded-[4rem] border-gold/10 text-left relative overflow-hidden group hover:border-gold/30 transition-all duration-700 min-h-[600px] flex flex-col md:flex-row">
                                        {/* Cinematic Visual Side */}
                                        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
                                            <ProgressiveImage
                                                src={getTarget().img || '/assets/murchisionfallsAeriel.jpg'}
                                                alt={getTarget().name}
                                                className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cream md:block hidden"></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-cream to-transparent md:hidden block"></div>
                                            <div className="absolute bottom-12 left-12 p-8 z-10 flex flex-col text-left">
                                                <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">Destination Profile</span>
                                                <h3 className="text-4xl md:text-5xl font-serif font-bold text-charcoal leading-tight italic tracking-tighter">{getTarget().name}</h3>
                                            </div>
                                        </div>

                                        {/* The Breakdown Side */}
                                        <div className="w-full md:w-1/2 p-10 md:p-16 relative z-10 flex flex-col justify-center">
                                            <div className="absolute -top-10 -right-10 p-12 text-gold opacity-[0.03] rotate-12 group-hover:scale-125 transition-transform duration-1000">
                                                <Sparkles size={300} />
                                            </div>

                                            <div className="flex items-center space-x-4 mb-8">
                                                <div className="w-10 h-10 glass rounded-full flex items-center justify-center">
                                                    <MapPin size={18} className="text-gold" />
                                                </div>
                                                <h4 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">Designated Destination</h4>
                                            </div>

                                            <p className="text-charcoal/50 text-xl font-light mb-12 leading-relaxed italic pr-12">{getTarget().desc}</p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                                <div className="flex items-center space-x-4 text-[11px] uppercase tracking-widest text-charcoal/30 font-bold">
                                                    <Calendar size={14} className="text-gold" />
                                                    <span>Verified Status: 2026/27</span>
                                                </div>
                                                <div className="flex items-center space-x-4 text-[11px] uppercase tracking-widest text-charcoal/30 font-bold">
                                                    <Briefcase size={14} className="text-gold" />
                                                    <span>Tier: Ultra-High End</span>
                                                </div>
                                            </div>

                                            <a
                                                href={getTarget().url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-premium rounded-full w-full py-6 flex justify-between items-center px-10 text-xs font-bold uppercase tracking-widest"
                                            >
                                                <span>Finalize via Official Portal</span>
                                                <div className="flex items-center space-x-2">
                                                    <ExternalLink size={18} />
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mt-16 text-charcoal/20 text-[10px] uppercase font-bold tracking-[0.8em] animate-pulse">
                                        Handing over to Destination Authority
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Escape;
