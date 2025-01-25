/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Custom Colors
            colors: {
                primary: {
                    light: '#A3CEF1',
                    DEFAULT: '#6A9FB5',
                    dark: '#3C6E8F',
                },
                secondary: {
                    light: '#FFD580',
                    DEFAULT: '#FFB347',
                    dark: '#CC8A34',
                },
                accent: {
                    light: '#A5D6A7',
                    DEFAULT: '#81C784',
                    dark: '#519657',
                },
                neutral: {
                    light: '#F4F4F4',
                    DEFAULT: '#E0E0E0',
                    dark: '#9E9E9E',
                },
            },
            // Custom Fonts
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Add 'Inter' as a modern default font
                serif: ['Merriweather', 'serif'], // Elegant serif font
                mono: ['Fira Code', 'monospace'], // Great for code blocks
            },
            // Custom Spacing
            spacing: {
                128: '32rem', // New spacing unit
                144: '36rem',
                '1/10': '10%',
                '9/10': '90%',
            },
            // Custom Shadows
            boxShadow: {
                glow: '0 0 15px rgba(0, 255, 135, 0.5)', // Add a glow effect
                card: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
            },
            // Custom Gradients
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
            },
            // Custom Animations
            animation: {
                bounce200: 'bounce 1s infinite 200ms',
                spinSlow: 'spin 3s linear infinite',
            },
            // Custom Keyframes
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'), // Typography plugin for better text styles
        require('@tailwindcss/forms'), // Better form styles
        require('@tailwindcss/aspect-ratio'), // Aspect-ratio utilities
    ],
};
