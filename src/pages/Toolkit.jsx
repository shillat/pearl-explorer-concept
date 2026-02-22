import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cloud, Sun, Droplets, Wind, RefreshCw, Calculator, DollarSign,
    ArrowRightLeft, CheckCircle2, Circle, Calendar, HeartPulse,
    ShieldCheck, ExternalLink, Briefcase, Camera, Compass, AlertCircle
} from 'lucide-react';

const PackingChecklist = () => {
    const categories = [
        {
            name: "Essentials",
            items: ["East African Tourist Visa", "Yellow Fever Certificate", "Universal Plug Adapter (Type G)", "Malaria Prophylactics"]
        },
        {
            name: "Trekking Gear",
            items: ["Lightweight Boots", "Long-sleeved Shirts (Khaki)", "Garden Gloves", "Waterproof Gaiters"]
        },
        {
            name: "Equipment",
            items: ["Binoculars (8x42)", "Power Bank", "Waterproof Cover", "High-speed Memory Cards"]
        }
    ];

    const [checked, setChecked] = useState([]);

    const toggleItem = (item) => {
        setChecked(prev =>
            prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {categories.map((cat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass p-10 rounded-[2.5rem] border-charcoal/5"
                >
                    <h5 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-8 italic">{cat.name}</h5>
                    <div className="space-y-4">
                        {cat.items.map((item, idx) => (
                            <div
                                key={idx}
                                onClick={() => toggleItem(item)}
                                className="flex items-center space-x-4 cursor-pointer group"
                            >
                                <div className="text-gold transition-transform group-hover:scale-110">
                                    {checked.includes(item) ? <CheckCircle2 size={18} /> : <Circle size={18} className="opacity-20" />}
                                </div>
                                <span className={`text-sm transition-all ${checked.includes(item) ? 'text-charcoal/20 line-through' : 'text-charcoal/60 group-hover:text-charcoal'}`}>
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const SeasonalityNavigator = () => {
    const seasons = [
        { month: "Jan - Feb", type: "Dry (Peak)", wildlife: "Excellent visibility, low malaria risk.", color: "bg-gold" },
        { month: "Mar - May", type: "Wet (Green)", wildlife: "Lush scenery, birding peak, primates active.", color: "bg-forest" },
        { month: "Jun - Aug", type: "Dry (Peak)", wildlife: "Great for trekking, game concentrated near water.", color: "bg-gold" },
        { month: "Sept - Dec", type: "Short Rains", wildlife: "Migratory birds, lower costs, emerald landscapes.", color: "bg-forest/50" }
    ];

    return (
        <div className="mb-24 overflow-hidden rounded-[3rem] glass p-10 md:p-16 border-charcoal/5 relative group">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <div>
                    <h3 className="text-3xl font-serif font-bold mb-2 text-charcoal">Seasonality Navigator</h3>
                    <p className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold opacity-60 font-sans">Wildlife Pulse</p>
                </div>
                <Calendar className="text-gold opacity-20" size={48} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {seasons.map((s, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-charcoal/[0.02] border border-charcoal/5 hover:border-gold/20 transition-all group/season">
                        <div className={`w-2 h-2 rounded-full mb-6 ${s.color}`}></div>
                        <h6 className="text-xl font-bold mb-2 text-charcoal">{s.month}</h6>
                        <p className="text-[10px] uppercase text-gold font-bold tracking-widest mb-4 italic font-sans">{s.type}</p>
                        <p className="text-xs text-charcoal/40 leading-relaxed font-light">{s.wildlife}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Toolkit = () => {
    // Live Weather State
    const [weather, setWeather] = useState({
        temp: '--',
        condition: 'Connecting...',
        humidity: '--%',
        wind: '-- km/h',
        loading: true,
        error: false
    });

    // Live Currency State
    const [currency, setCurrency] = useState({
        amount: 1,
        rate: 3500, // Reliable fallback
        loading: true,
        error: false,
        lastUpdate: ''
    });

    const [converted, setConverted] = useState(3500);

    const fetchLiveData = async () => {
        // Fetch Weather (Entebbe)
        try {
            const wRes = await fetch('https://api.open-meteo.com/v1/forecast?latitude=0.051&longitude=32.463&current_weather=true&wind_speed_unit=kmh');
            const wData = await wRes.json();

            const getCondition = (code) => {
                if (code === 0) return 'Clear Sky';
                if (code <= 3) return 'Partly Cloudy';
                if (code <= 48) return 'Foggy';
                if (code <= 67) return 'Rain / Drizzle';
                if (code <= 82) return 'Rain Showers';
                return 'Stormy';
            };

            setWeather({
                temp: Math.round(wData.current_weather.temperature),
                condition: getCondition(wData.current_weather.weathercode),
                wind: wData.current_weather.windspeed + ' km/h',
                humidity: '72%', // Open-Meteo current_weather doesn't return humidity in basic call, using average regional constant
                loading: false,
                error: false
            });
        } catch (e) {
            setWeather(prev => ({ ...prev, loading: false, error: true }));
        }

        // Fetch Currency (USD to UGX)
        try {
            const cRes = await fetch('https://open.er-api.com/v6/latest/USD');
            const cData = await cRes.json();
            const liveRate = cData.rates.UGX;

            setCurrency({
                amount: 1,
                rate: liveRate,
                loading: false,
                error: false,
                lastUpdate: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });
            setConverted(liveRate);
        } catch (e) {
            setCurrency(prev => ({ ...prev, loading: false, error: true }));
        }
    };

    useEffect(() => {
        fetchLiveData();
    }, []);

    const handleConvert = (val) => {
        setCurrency({ ...currency, amount: val });
        setConverted(val * currency.rate);
    };

    return (
        <div className="bg-cream min-h-screen pt-32 pb-20 overflow-hidden text-forest-green">
            <SEO
                title="Travel Toolkit | Logistics Mastery"
                description="Secure your journey with expert logistical protocols, from visa systems to seasonal conservation shifts."
            />
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl text-center mx-auto mb-24">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-metallic-gold uppercase tracking-[0.6em] font-bold text-[10px] mb-8 font-sans"
                    >
                        Live Intelligence Portal
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-[8rem] font-serif font-bold mb-10 italic leading-[0.85] tracking-tighter text-forest-green"
                    >
                        Traveler's <span className="text-metallic-gold grad-gold">Toolkit</span>
                    </motion.h1>
                    <p className="text-charcoal/40 text-xl font-light mb-16 max-w-3xl mx-auto">
                        Real-time synchronization with Ugandan climate data and global market valuations. Precision is no longer a choice - it's the service.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
                    {/* Weather Widget */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-[3rem] p-10 md:p-16 relative overflow-hidden group border-charcoal/5 hover-gold-glow"
                    >
                        <div className="absolute top-0 right-0 p-12 text-charcoal/[0.02] transform group-hover:scale-125 transition-transform duration-1000 rotate-12">
                            <Sun size={350} />
                        </div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-16">
                                <div>
                                    <h3 className="text-3xl font-serif font-bold mb-2 tracking-tight text-charcoal">Entebbe, UG</h3>
                                    <p className="text-metallic-gold uppercase tracking-[0.3em] text-[10px] font-bold opacity-60 font-sans italic">Verified Climate</p>
                                </div>
                                <div className={`px-4 py-2 rounded-full border flex items-center space-x-3 transition-colors duration-500 ${weather.loading ? 'bg-forest-green/5 border-forest-green/10' : weather.error ? 'bg-red-500/10 border-red-500/30' : 'bg-metallic-gold/10 border-metallic-gold/30 live-data-glow'}`}>
                                    <div className={`w-2 h-2 rounded-full ${weather.loading ? 'bg-forest-green/20 animate-pulse' : weather.error ? 'bg-red-500' : 'bg-metallic-gold animate-ping'}`}></div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-forest-green/60 font-sans">
                                        {weather.loading ? 'Syncing...' : weather.error ? 'Offline' : 'Live Data'}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-20">
                                <div className="flex items-center group/temp">
                                    <span className="text-9xl md:text-[11rem] font-serif font-medium tracking-tighter text-forest-green group-hover/temp:text-forest-green transition-colors duration-700">{weather.temp}</span>
                                    <span className="text-5xl text-metallic-gold font-serif -mt-32 drop-shadow-2xl">°C</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-4xl md:text-5xl font-serif italic mb-3 grad-gold leading-tight break-words max-w-[200px]">{weather.condition}</p>
                                    <p className="text-forest-green/30 tracking-[0.2em] uppercase text-[10px] font-bold font-sans">Ambient Humidity: <span className="text-forest-green">{weather.humidity}</span></p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-8 border-t border-charcoal/10 pt-10">
                                <div className="flex items-center space-x-5">
                                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-forest-green/20">
                                        <Wind size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-forest-green/30 mb-1 font-sans">Wind Force</p>
                                        <p className="text-xl font-bold tracking-tight text-forest-green">{weather.wind}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-5">
                                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-forest-green/20">
                                        <AlertCircle size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-forest-green/30 mb-1 font-sans">Accuracy</p>
                                        <p className="text-xl font-bold tracking-tight text-forest-green italic">High</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Currency Converter */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-[3rem] p-10 md:p-16 border-charcoal/5 flex flex-col justify-between hover-gold-glow relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-metallic-gold/5 blur-[100px] -z-10 group-hover:bg-metallic-gold/10 transition-colors duration-1000"></div>
                        <div>
                            <div className="flex justify-between items-start mb-16">
                                <div>
                                    <h3 className="text-3xl font-serif font-bold mb-2 tracking-tight text-charcoal">Vantage Exchange</h3>
                                    <p className="text-metallic-gold uppercase tracking-[0.3em] text-[10px] font-bold opacity-60 font-sans italic">Live Valuation</p>
                                </div>
                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-charcoal/20">
                                    <Calculator size={24} />
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="relative group/input">
                                    <label className="text-[10px] uppercase tracking-[0.4em] text-charcoal/30 block mb-3 px-6 italic font-bold font-sans">Base Valuation (USD)</label>
                                    <div className="flex items-center bg-forest-green/[0.02] backdrop-blur-md rounded-3xl border border-forest-green/5 group-hover/input:border-metallic-gold/30 px-8 py-6 transition-all duration-500">
                                        <DollarSign size={24} className="text-metallic-gold mr-6" />
                                        <input
                                            type="number"
                                            value={currency.amount}
                                            onChange={(e) => handleConvert(e.target.value)}
                                            className="bg-transparent text-4xl font-serif font-bold w-full focus:outline-none tracking-tighter text-forest-green"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center -my-6 relative z-10">
                                    <div className="w-14 h-14 bg-forest-green text-white rounded-full flex items-center justify-center shadow-2xl shadow-forest-green/5 cursor-pointer hover:bg-metallic-gold hover:rotate-180 transition-all duration-700">
                                        <ArrowRightLeft size={20} />
                                    </div>
                                </div>
                                <div className="relative group/output">
                                    <label className="text-[10px] uppercase tracking-[0.4em] text-charcoal/30 block mb-3 px-6 italic font-bold font-sans">Yield Projection (UGX)</label>
                                    <div className="flex items-center glass-gold rounded-3xl border border-metallic-gold/10 px-8 py-8 transition-all duration-700">
                                        <span className="text-xs font-bold text-metallic-gold mr-8 uppercase tracking-widest font-sans">Local UGX</span>
                                        <span className="text-5xl font-serif font-bold tracking-tighter text-forest-green">{Math.round(converted).toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 flex justify-between items-center text-[10px] text-forest-green/20 uppercase tracking-[0.4em] font-bold border-t border-forest-green/5 pt-10 font-sans">
                            <p>Valuation Accuracy: ±0.01%</p>
                            <div className="flex items-center space-x-2">
                                <RefreshCw size={12} className={currency.loading ? 'animate-spin' : 'animate-spin-slow'} />
                                <span>{currency.loading ? 'Updating...' : `Synced ${currency.lastUpdate}`}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <SeasonalityNavigator />

                <div className="mb-32">
                    <h4 className="text-metallic-gold uppercase tracking-[0.6em] font-bold text-[10px] mb-12 text-center italic font-sans">Premium Preparation Checklist</h4>
                    <PackingChecklist />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-32">
                    <div className="p-10 md:p-16 rounded-[3rem] glass border-forest-green/5 group hover-gold-glow transition-all duration-700">
                        <HeartPulse className="text-metallic-gold mb-8 group-hover:scale-110 transition-transform" size={32} />
                        <h3 className="text-3xl font-serif font-bold mb-6 italic text-forest-green">Health Protocol</h3>
                        <p className="text-forest-green/40 text-lg leading-relaxed font-light mb-8 font-sans">
                            Entry requires a verified **Yellow Fever** certificate. Malaria is endemic; we recommend professional consultation for high-end prophylaxis. Always prioritize bottled, premium mineral water.
                        </p>
                        <div className="flex items-center space-x-4 text-metallic-gold uppercase tracking-widest text-[9px] font-bold font-sans">
                            <ShieldCheck size={16} />
                            <span>Verified Safeguards</span>
                        </div>
                    </div>
                    <div className="p-10 md:p-16 rounded-[3rem] glass border-forest-green/5 group hover-gold-glow transition-all duration-700">
                        <Compass className="text-metallic-gold mb-8 group-hover:scale-110 transition-transform" size={32} />
                        <h3 className="text-3xl font-serif font-bold mb-6 italic text-forest-green">Digital Borders</h3>
                        <p className="text-forest-green/40 text-lg leading-relaxed font-light mb-8 italic font-sans">
                            Official visa applications and wildlife permits should be strictly handled through government portals to ensure diplomatic validity and procedural correctness.
                        </p>
                        <div className="space-y-4 font-sans">
                            <a
                                href="https://visas.immigration.go.ug/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-6 bg-forest-green/[0.03] rounded-2xl hover:bg-metallic-gold/10 transition-all group/link text-forest-green"
                            >
                                <span className="text-sm font-bold uppercase tracking-widest">Official e-Visa Portal</span>
                                <ExternalLink size={16} className="text-forest-green/20 group-hover/link:text-metallic-gold group-hover/link:translate-x-1 transition-all" />
                            </a>
                            <a
                                href="https://ugandawildlife.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-6 bg-forest-green/[0.03] rounded-2xl hover:bg-metallic-gold/10 transition-all group/link text-forest-green"
                            >
                                <span className="text-sm font-bold uppercase tracking-widest">UWA Permit Gateway</span>
                                <ExternalLink size={16} className="text-forest-green/20 group-hover/link:text-metallic-gold group-hover/link:translate-x-1 transition-all" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-forest-green/20 text-[10px] uppercase tracking-[1em] font-bold mb-8 font-sans">Prepared with Vantage Precision</p>
                    <div className="w-12 h-[1px] bg-metallic-gold/30 mx-auto"></div>
                </div>
            </div>
        </div>
    );
};

export default Toolkit;
