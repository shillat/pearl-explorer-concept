/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                charcoal: '#0f0f0f',
                'forest-green': '#1B3022',
                'midnight-slate': '#2D2926',
                'metallic-gold': '#D4AF37',
                'vibrant-gold': '#FFD700',
                'deep-emerald': '#0E4C3C',
                'warm-ivory': '#FFF8E1',
                'rich-brown': '#8B4513',
                'safari-green': '#228B22',
                gold: '#e6b800',
                amber: '#ffcc00',
                sage: '#87a96b',
                burgundy: '#8b2e3e',
                taupe: '#bfae99',
                slate: '#4a5568',
                cream: '#FFFBEB',
                ivory: '#f5f0e6',
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
