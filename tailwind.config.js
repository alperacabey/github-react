module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                white: { DEFAULT: '#FFFFFF' },
                black: { DEFAULT: '#111111' },
                red: { DEFAULT: '#FF0000' },
                blue: { DEFAULT: '#0085FF', light: '#B2DAFF' },
                yellow: { DEFAULT: '#FFD600' },
                green: { DEFAULT: '#00CC2D' },
                gray: { DEFAULT: '#f4f4f4', light: '#D3D3D3', dark: '#555456' },
            }
        },
        boxShadow: {
            header: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            active: '0px 0px 8px rgba(0, 133, 255, 0.3)'
        },
        borderColor: {
            'primary': '#D3D3D3',
            'secondary': 'rgba(0, 133, 255, 0.3)',
            'danger': '#FF0000',
        },
        placeholderColor: {
            'primary': '#D3D3D3',
            'secondary': '#555456',
            'danger': '#FF0000',
        },
        fontSize: {
            'xs': '9px',
            'sm': '11px',
            'md': '12px',
            'lg': '18px',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
        screens: {
            'tablet': '640px',
            // => @media (min-width: 640px) { ... }

            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }

            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
    },
    variants: {
        borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        // extend: {
        //     borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        // },
        gridColumn: ['responsive', 'hover'],
        gridColumnStart: ['responsive', 'hover'],
        gridColumnEnd: ['responsive', 'hover'],
    },
    plugins: [],
}