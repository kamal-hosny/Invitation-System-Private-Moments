
/** @type {import('tailwindcss').Configuration} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "Readex": ["Readex Pro", "sans-serif"]
            },
        },
    },
    plugins: [],
}