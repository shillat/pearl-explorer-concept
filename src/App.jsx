import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EntebbeLoop from './pages/EntebbeLoop';
import SafariCircuit from './pages/SafariCircuit';
import Toolkit from './pages/Toolkit';
import Heritage from './pages/Heritage';

import Escape from './pages/Escape';
import SEO from './components/SEO';
import CommandPalette from './components/CommandPalette';

function App() {
    return (
        <Router>
            <SEO />
            <CommandPalette />
            <div className="min-h-screen flex flex-col selection:bg-metallic-gold selection:text-midnight-slate bg-cream">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/entebbe-loop" element={<EntebbeLoop />} />
                        <Route path="/safari-circuit" element={<SafariCircuit />} />
                        <Route path="/toolkit" element={<Toolkit />} />
                        <Route path="/heritage" element={<Heritage />} />
                        <Route path="/escape" element={<Escape />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
