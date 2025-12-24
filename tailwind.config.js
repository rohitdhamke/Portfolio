tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                heading: ['"Outfit"', 'sans-serif'],
            },
            colors: {
                gray: {
                    900: '#000000', // Pitch Black / Obsidian
                    800: '#0a0a0a', // Almost Black
                    700: '#171717', // Dark Gray
                    100: '#f5f5f5', // White Smoke
                    300: '#d4d4d4', // Neutral 300
                    400: '#a3a3a3', // Neutral 400
                }
            },
            animation: {
                blob: "blob 10s infinite",
                "fade-in-up": "fadeInUp 0.8s ease-out forwards",
                "shimmer": "shimmer 2s linear infinite",
            },
            keyframes: {
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.2)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.8)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" },
                },
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "0 0" },
                    "100%": { backgroundPosition: "-200% 0" },
                }
            },
        },
    },
}
