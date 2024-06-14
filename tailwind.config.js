/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "Readex": ["Readex Pro", "sans-serif"]
            },
            colors: {
                'main-bg': 'rgb(var(--main-color-background))',
                'main': 'rgb(var(--main-color))',
                'section': 'rgb(var(--section-color))',
                'section-hover': 'rgb(var(--section-color-hover))',
                'text-1': 'rgb(var(--color-text-1))',
                'text-2': 'rgb(var(--color-text-2))',
                'border': 'rgb(var(--color-border))',
                'navbar-bg': 'rgb(var(--main-navber-background))',
                'navbar-hover': 'rgb(var(--main-navber-hover))',
                'text-1-navbar': 'rgb(var(--color-text-1-navber))',
                'text-2-navbar': 'rgb(var(--color-text-2-navber))',
            },
        },
    },
    plugins: [],
}
