/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                midnight: '#0B1026', // Deep midnight blue
                'midnight-light': '#151B35', // Lighter midnight
                charcoal: '#1E293B', // Slate 800

                // Enhanced Gold/Amber Palette
                'gold-muted': '#C5A059', // Muted antique gold
                'gold-bright': '#E0B872', // Brighter gold
                'gold-glow': '#F5D895', // Luminous gold
                'amber-warm': '#D4A574', // Warm amber
                'amber-deep': '#B8935E', // Deep amber

                // Enhanced Glass Colors
                glass: 'rgba(255, 255, 255, 0.05)',
                'glass-light': 'rgba(255, 255, 255, 0.08)',
                'glass-medium': 'rgba(255, 255, 255, 0.12)',
                'glass-strong': 'rgba(255, 255, 255, 0.15)',
                'glass-border': 'rgba(255, 255, 255, 0.1)',
                'glass-border-strong': 'rgba(255, 255, 255, 0.2)',

                // Glow Colors
                'glow-gold': 'rgba(197, 160, 89, 0.4)',
                'glow-blue': 'rgba(59, 130, 246, 0.3)',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            },
            backdropBlur: {
                xs: '2px',
                '2xl': '40px',
                '3xl': '64px',
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                'glass-lg': '0 12px 48px 0 rgba(0, 0, 0, 0.5)',
                'glow-gold': '0 0 20px rgba(197, 160, 89, 0.3)',
                'glow-gold-lg': '0 0 40px rgba(197, 160, 89, 0.4)',
                'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
            },
            animation: {
                'float': 'float 20s ease-in-out infinite',
                'float-slow': 'float 30s ease-in-out infinite',
                'float-slower': 'float 40s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
                    '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
                    '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.05)' },
                }
            }
        },
    },
    plugins: [],
}
