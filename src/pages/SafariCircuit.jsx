import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Map, Zap, Users, Filter, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProgressiveImage from '../components/ProgressiveImage';

const parks = [
    {
        name: 'Bwindi Impenetrable',
        category: 'The Primate Capital',
        type: 'primates',
        signature: 'Mountain Gorillas',
        img: '/assets/bwindiMist.jpg', // Authentic Ugandan Mist
        facts: {
            biodiversity: '350 Bird Species',
            population: '459 Mountain Gorillas',
            size: '321 sq km',
            activity: 'Gorilla Trekking'
        },
        itinerary: {
            duration: '3 Days / 2 Nights',
            lodging: 'Sanctuary Gorilla Forest Camp',
            logistics: 'Scheduled Flight to Kihihi + 4x4 Transfer',
            days: [
                { day: 1, title: 'Arrival in the Mist', desc: 'Arrive at the forest edge. Afternoon guided walk through local Batwa communities for cultural immersion.' },
                { day: 2, title: 'The Gorilla Encounter', desc: 'A deep trek into the ancient forest to spend one hour with a mountain gorilla family.' },
                { day: 3, title: 'Forest Farewell', desc: 'Bird watching at sunrise followed by transfer back to the airstrip for your flight.' }
            ]
        }
    },
    {
        name: 'Murchison Falls',
        category: 'The Nile\'s Power',
        type: 'savannah',
        signature: 'The Mighty Nile',
        img: '/assets/murchisionfallsAeriel.jpg', // The real Murchison Falls
        facts: {
            biodiversity: '76 Mammal Species',
            population: 'Powerful Nile Flow',
            size: '3,840 sq km',
            activity: 'Boat Safari & Hike'
        },
        itinerary: {
            duration: '4 Days / 3 Nights',
            lodging: 'Nile Safari Lodge',
            logistics: 'Private 4x4 Drive or Flight to Pakuba',
            days: [
                { day: 1, title: 'Northern Gate Arrival', desc: 'Entry via the scenic northern gate. Evening game drive looking for lions and leopards.' },
                { day: 2, title: 'Power and Mist', desc: 'Morning boat safari to the base of the falls, followed by a hike to the top for the thunderous view.' },
                { day: 3, title: 'Delta Exploration', desc: 'Boat trip to the Nile Delta looking for the rare Shoebill Stork in the papyrus swamps.' },
                { day: 4, title: 'Final Game Drive', desc: 'Early morning game drive before departure towards your next destination.' }
            ]
        }
    },
    {
        name: 'Queen Elizabeth',
        category: 'Savannah Serenity',
        type: 'savannah',
        signature: 'Tree-Climbing Lions',
        img: '/assets/kazingaChanel.jpg', // The Kazinga Channel
        facts: {
            biodiversity: '600+ Bird Species',
            population: '95 Mammal Species',
            size: '1,978 sq km',
            activity: 'Kazinga Channel Boat Trip'
        },
        itinerary: {
            duration: '3 Days / 2 Nights',
            lodging: 'Kyambura Gorge Lodge',
            logistics: 'Flight to Kasese/Mweya or Scenic Drive',
            days: [
                { day: 1, title: 'Kazinga Arrival', desc: 'Settle in. Sunset cruise on the Kazinga Channel for hippos, elephants, and water birds.' },
                { day: 2, title: 'Lion Tracking & Primates', desc: 'Early morning game drive in Kasenyi. Afternoon chimpanzee trekking in the Kyambura Gorge.' },
                { day: 3, title: 'Ishasha Plains', desc: 'Journey to the southern sector to look for the famous tree-climbing lions before exit.' }
            ]
        }
    },
    {
        name: 'Rwenzori Mountains',
        category: 'Mountains of the Moon',
        type: 'adventure',
        signature: 'Margherita Peak',
        img: '/assets/snowCapedRwenzori.jpg', // The Mountains of the Moon
        facts: {
            biodiversity: 'Endemic Flora',
            population: 'Glacial Peaks',
            size: '996 sq km',
            activity: 'Mountain Climbing'
        },
        itinerary: {
            duration: '7 Days / 6 Nights',
            lodging: 'Exotic Mountain Camps & Equator Snow Lodge',
            logistics: 'Transfer from Kasese Airstrip',
            days: [
                { day: 1, title: 'Basecamp Prep', desc: 'Final gear check at Nyakalengija. Short acclimatization walk through the lower foothills.' },
                { day: 2, title: 'Mahooma Trail', desc: 'Ascent through montane forest and bamboo zones to the first high-altitude camps.' },
                { day: 3, title: 'The Glacial View', desc: 'Pushing into the heather zone. Stunning views of Portal Peaks and Mount Baker.' },
                { day: 4, title: 'Mountain Silence', desc: 'Full day of high-altitude trekking through giant lobelias and unique mountain bogs.' },
                { day: 5, title: 'The Summit Push', desc: 'Early start for those aiming for Margherita Peak or exploration of the upper glaciers.' },
                { day: 6, title: 'The Descent', desc: 'Trekking back down through the changing vegetation zones with varied perspectives.' },
                { day: 7, title: 'Return to Valley', desc: 'Final descent to the trailhead and a celebratory dinner at the base lodge.' }
            ]
        }
    },
    {
        name: 'Kidepo Valley',
        category: 'Rugged Isolation',
        type: 'savannah',
        signature: 'Cheetahs & Ostriches',
        img: '/assets/kidepoValleyView.jpg', // Real Kidepo Valley
        facts: {
            biodiversity: 'Ostriches & Cheetahs',
            population: 'Wilderness Icon',
            size: '1,442 sq km',
            activity: 'Exclusive Game Drives'
        },
        itinerary: {
            duration: '5 Days / 4 Nights',
            lodging: 'Apoka Safari Lodge',
            logistics: 'Charter Flight (Highly Recommended)',
            days: [
                { day: 1, title: 'Remote Arrival', desc: 'Arrive at one of the most remote parks in Africa. Sundowners overlooking the Narus Valley.' },
                { day: 2, title: 'Valley of the Zebras', desc: 'Dawn game drive in the Narus Valley, the only year-round water source for wildlife.' },
                { day: 3, title: 'Kanochorok Hot Springs', desc: 'Journey towards the South Sudan border. Visit the hot springs and the dry Kidepo river bed.' },
                { day: 4, title: 'Ik Community Visit', desc: 'A culturally profound hike up Mount Morungole to meet the Ik people, one of the smallest tribes.' },
                { day: 5, title: 'Final Solitude', desc: 'Sunrise breakfast in the bush before your return flight to the capital.' }
            ]
        }
    },
    {
        name: 'Kibale Forest',
        category: 'Primate Paradise',
        type: 'primates',
        signature: 'Chimpanzees',
        img: '/assets/kibaleChimpanzees.jpg', // Kibale Chimpanzees
        facts: {
            biodiversity: '13 Primate Species',
            population: '1,500 Chimpanzees',
            size: '795 sq km',
            activity: 'Chimpanzee Habituation'
        },
        itinerary: {
            duration: '3 Days / 2 Nights',
            lodging: 'Kyaninga Lodge',
            logistics: 'Drive from Fort Portal',
            days: [
                { day: 1, title: 'Fort Portal Gateway', desc: 'Arrive via the crater lakes region. Evening walk through Bigodi Wetland Sanctuary.' },
                { day: 2, title: 'Chimpanzee Day', desc: 'A full day of trekking or a specialized habituation experience with our closest relatives.' },
                { day: 3, title: 'Crater Lakes Loop', desc: 'Sunrise over a volcanic crater lake before departing for Queen Elizabeth or Entebbe.' }
            ]
        }
    },
    {
        name: 'Lake Mburo',
        category: 'Whispering Zebras',
        type: 'savannah',
        signature: 'Rothschild Giraffes',
        img: '/assets/lakeMburoZebras.jpg', // Lake Mburo Zebras
        facts: {
            biodiversity: '350 Bird Species',
            population: 'Large Zebra Herd',
            size: '260 sq km',
            activity: 'Night Game Drives'
        },
        itinerary: {
            duration: '2 Days / 1 Night',
            lodging: 'Mihingo Lodge',
            logistics: 'Scenic Drive (3-4 hours from Entebbe)',
            days: [
                { day: 1, title: 'Zebra Trails', desc: 'Afternoon horseback safari or walking safari to get closer to zebras and impalas.' },
                { day: 2, title: 'The Night Pulse', desc: 'Morning boat trip on Lake Mburo, followed by a nocturnal game drive to find leopards.' }
            ]
        }
    },
    {
        name: 'Mount Elgon',
        category: 'Volcanic Grandeur',
        type: 'adventure',
        signature: 'Sipi Falls',
        img: '/assets/sipiFalls.jpg', // Sipi Falls / Mount Elgon
        facts: {
            biodiversity: 'Extinct Volcano Flora',
            population: 'Sipi Falls Area',
            size: '1,121 sq km',
            activity: 'Abseiling & Hiking'
        },
        itinerary: {
            duration: '4 Days / 3 Nights',
            lodging: 'Sipi River Lodge',
            logistics: 'Drive from Jinja or Mbale',
            days: [
                { day: 1, title: 'Falls Arrival', desc: 'Sunset at the main fall. Evening prep for the morning abseiling adventure.' },
                { day: 2, title: 'The Vertical Drop', desc: 'Full day of abseiling beside the thunderous 100m Sipi Falls and hiking the trails.' },
                { day: 3, title: 'Coffee and Culture', desc: 'Learn the secrets of Bugisu Arabica coffee. Visit local farmers and roasting houses.' },
                { day: 4, title: 'Foothill Trek', desc: 'A gentle mountain trek through unique alpine vegetation before your departure.' }
            ]
        }
    },
    {
        name: 'Semuliki National Park',
        category: 'The True Birders Haven',
        type: 'primates',
        signature: 'Sempaya Hot Springs',
        img: '/assets/sempayaHotspring.jpg', // Sempaya Hot Springs
        facts: {
            biodiversity: '441 Bird Species',
            population: 'Hot Springs Oasis',
            size: '220 sq km',
            activity: 'Hot Springs Visit'
        },
        itinerary: {
            duration: '3 Days / 2 Nights',
            lodging: 'Semliki Safari Lodge',
            logistics: 'Scenic winding drive through the Rwenzori foothills',
            days: [
                { day: 1, title: 'Valley Descent', desc: 'Dramatic descent into the Albertine Rift Valley. Evening game walk in the reserve.' },
                { day: 2, title: 'Elements Unleashed', desc: 'A trek to the Sempaya Male and Female hot springs. Afternoon birding in the lowland forest.' },
                { day: 3, title: 'Lake Albert Shores', desc: 'Visit the fishing communities on Lake Albert before returning to Fort Portal.' }
            ]
        }
    }
];

const ItineraryModal = ({ park, isOpen, onClose }) => {
    if (!park) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-charcoal/95 backdrop-blur-3xl"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        className="glass-gold w-full max-w-5xl h-[85vh] rounded-[3rem] relative z-10 overflow-hidden flex flex-col md:flex-row"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 text-charcoal/20 hover:text-gold z-50 transition-colors"
                        >
                            <Info className="rotate-45" size={24} />
                        </button>

                        {/* Left: Cinematic Visuals */}
                        <div className="w-full md:w-5/12 h-64 md:h-full relative overflow-hidden bg-gold/5 flex items-center justify-center text-charcoal/[0.03] text-[9px] uppercase font-bold text-center p-12 tracking-[1.5em] leading-relaxed">
                            {park.img}
                            <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/20"></div>
                            <div className="absolute bottom-12 left-12 right-12 text-left z-20">
                                <span className="text-gold text-[10px] uppercase tracking-[0.6em] font-bold mb-4 block">{park.category}</span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal italic leading-none">{park.name}</h2>
                            </div>
                        </div>

                        {/* Right: The Breakdown */}
                        <div className="w-full md:w-7/12 p-8 md:p-16 overflow-y-auto custom-scrollbar bg-cream">
                            <div className="mb-12 flex justify-between items-end border-b border-charcoal/5 pb-8">
                                <div>
                                    <h4 className="text-metallic-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-2">Duration</h4>
                                    <p className="text-2xl font-serif font-bold italic text-forest-green">{park.itinerary.duration}</p>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-metallic-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-2">Vessel / Transport</h4>
                                    <p className="text-sm text-forest-green/50 font-light">{park.itinerary.logistics}</p>
                                </div>
                            </div>

                            <div className="space-y-12">
                                {park.itinerary.days.map((day, idx) => (
                                    <div key={idx} className="relative pl-12 group">
                                        <div className="absolute left-0 top-1 w-6 h-6 glass-gold rounded-full flex items-center justify-center text-[10px] text-metallic-gold font-bold transition-transform group-hover:scale-110">
                                            {day.day}
                                        </div>
                                        {idx !== park.itinerary.days.length - 1 && (
                                            <div className="absolute left-3 top-7 bottom-[-48px] w-[1px] bg-gold/10"></div>
                                        )}
                                        <h4 className="text-lg font-bold uppercase tracking-widest text-charcoal mb-2">{day.title}</h4>
                                        <p className="text-charcoal/40 font-light leading-relaxed">{day.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 p-8 glass rounded-3xl border-forest-green/5 flex flex-col md:flex-row justify-between items-center bg-metallic-gold/[0.02]">
                                <div className="mb-6 md:mb-0">
                                    <h4 className="text-metallic-gold uppercase tracking-[0.4em] text-[9px] font-bold mb-2 italic">Standard Lodge</h4>
                                    <p className="text-xl font-serif font-bold text-forest-green">{park.itinerary.lodging}</p>
                                </div>
                                <a
                                    href="https://uwec.ug/reservations/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-premium rounded-full"
                                >
                                    Official Booking Portal
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const SafariCircuit = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedPark, setSelectedPark] = useState(null);
    const [filter, setFilter] = useState('all');

    const filteredParks = filter === 'all'
        ? parks
        : parks.filter(p => p.type === filter);

    const filterOptions = [
        { id: 'all', label: 'All Peaks' },
        { id: 'primates', label: 'Primate Eden' },
        { id: 'savannah', label: 'Savannah Pulse' },
        { id: 'adventure', label: 'Extreme Frontiers' }
    ];

    return (
        <div className="bg-cream min-h-screen pt-32 pb-20 text-forest-green">
            <SEO
                title="Safari Circuit | Premier Conservation Navigation"
                description="Explore the absolute elite of Uganda's National Parks. From the Mist of Bwindi to the heat of the Nile."
            />
            {/* Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-[1]"></div>

            <div className="container mx-auto px-6 md:px-12 mb-32 relative z-10">
                {/* Chessboard Header */}
                <div className="asymmetric-grid items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="asymmetric-item-6"
                    >
                        <h4 className="text-metallic-gold uppercase tracking-[0.6em] font-bold text-[10px] mb-8 flex items-center gap-4">
                            <Sparkles size={12} />
                            The Grand Expedition
                        </h4>
                        <h1 className="text-6xl md:text-9xl font-serif font-bold mb-10 leading-[0.8] tracking-tighter text-forest-green">
                            Safari <br /> <span className="italic text-metallic-gold grad-gold">Circuit</span>
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="asymmetric-item-6 lg:pl-12"
                    >
                        <p className="text-forest-green/40 text-xl font-light leading-relaxed mb-12">
                            Uganda’s national parks are distinct worlds unto themselves. Each offers a unique pulse, a different sound, and a conservation story that we invite you to be part of.
                        </p>
                    </motion.div>
                </div>

                {/* Filter System */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
                    <div className="flex bg-white/[0.03] backdrop-blur-md p-1.5 rounded-full border border-white/5">
                        {filterOptions.map(opt => (
                            <button
                                key={opt.id}
                                onClick={() => setFilter(opt.id)}
                                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${filter === opt.id
                                    ? 'bg-metallic-gold text-midnight-slate shadow-[0px_10px_30px_rgba(212,175,55,0.3)]'
                                    : 'text-forest-green/40 hover:text-metallic-gold'
                                    }`}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredParks.map((park, index) => (
                            <motion.div
                                layout
                                key={park.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: (index % 3) * 0.05 }}
                                className={`relative group h-[600px] rounded-[3rem] overflow-hidden border border-charcoal/10 bg-cream hover-gold-glow transition-all duration-700 ${index % 2 === 1 ? 'md:translate-y-12' : ''}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="absolute inset-0 overflow-hidden transform group-hover:scale-110 transition-transform duration-1000">
                                    <ProgressiveImage
                                        src={park.img}
                                        alt={park.name}
                                        className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/20 to-transparent"></div>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/20 to-transparent z-10 transition-colors duration-700 group-hover:via-cream/40"></div>

                                <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                                    <div className="transform group-hover:-translate-y-4 transition-transform duration-700">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-metallic-gold text-[10px] uppercase tracking-[0.5em] font-bold block">{park.category}</span>
                                            <span className="glass border-forest-green/10 text-forest-green/30 text-[8px] px-3 py-1 rounded-full uppercase tracking-widest font-bold group-hover:border-metallic-gold/30 group-hover:text-metallic-gold transition-colors">{park.signature}</span>
                                        </div>
                                        <h3 className="text-4xl font-serif font-bold mb-6 italic tracking-tight text-forest-green">{park.name}</h3>
                                        <div className="flex items-center space-x-3 text-forest-green/30 group-hover:text-metallic-gold transition-colors duration-500">
                                            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-metallic-gold/30">
                                                <Info size={14} />
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Explore Profile</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Overlay Facts Card */}
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                                            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
                                            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                                            className="absolute inset-0 z-30 flex items-center justify-center p-6 bg-cream/40"
                                        >
                                            <motion.div
                                                initial={{ scale: 0.9, y: 20 }}
                                                animate={{ scale: 1, y: 0 }}
                                                className="w-full glass-gold rounded-3xl p-10 flex flex-col justify-center"
                                            >
                                                <h4 className="text-gold uppercase tracking-[0.4em] text-[8px] font-bold mb-10 border-b border-gold/10 pb-4 flex justify-between items-center">
                                                    <span>The Statistics</span>
                                                    <Map size={12} />
                                                </h4>
                                                <div className="space-y-8">
                                                    <div className="flex items-center space-x-5">
                                                        <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                                                            <Zap size={20} className="text-gold" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[9px] uppercase tracking-widest text-charcoal/30 mb-1 italic">Signature Experience</p>
                                                            <p className="text-xl font-bold tracking-tight text-charcoal">{park.facts.activity}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-5">
                                                        <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                                                            <Users size={20} className="text-gold" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[9px] uppercase tracking-widest text-charcoal/30 mb-1 italic">Conservation Focus</p>
                                                            <p className="text-xl font-bold tracking-tight text-charcoal">{park.facts.population}</p>
                                                        </div>
                                                    </div>
                                                    <div className="pt-8 border-t border-charcoal/5 flex justify-between items-end">
                                                        <div>
                                                            <p className="text-[9px] uppercase tracking-widest text-charcoal/30 mb-1">Total Coverage</p>
                                                            <p className="text-sm font-bold tracking-widest text-gold">{park.facts.size}</p>
                                                        </div>
                                                        <button
                                                            onClick={() => setSelectedPark(park)}
                                                            className="btn-premium py-3 px-6 rounded-full text-[9px]"
                                                        >
                                                            Full Itinerary
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Floating Escape CTA */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100]"
            >
                <Link to="/escape">
                    <button className="glass-gold py-4 px-10 rounded-full flex items-center gap-6 group hover:translate-y-[-5px] transition-all duration-500 shadow-[0px_20px_50px_rgba(0,0,0,0.5)] border-gold/20">
                        <div className="flex flex-col text-left">
                            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gold mb-1">Unsure?</span>
                            <span className="text-xs uppercase tracking-widest font-bold text-white">Design Your Journey</span>
                        </div>
                        <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-charcoal group-hover:scale-110 transition-transform">
                            <ArrowRight size={18} />
                        </div>
                    </button>
                </Link>
            </motion.div>

            <ItineraryModal
                park={selectedPark}
                isOpen={!!selectedPark}
                onClose={() => setSelectedPark(null)}
            />
        </div>
    );
};

export default SafariCircuit;
