// src/theme/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: 'var(--font-exo-2), sans-serif',
        body: 'var(--font-inter), sans-serif',
    },
    colors: {
        main: '#103948', // Main Color
        accent: '#2F855A', // Accent Color (Green)
        secondary: '#EDF2F7', // Secondary Color (Light Background)
        textPrimary: '#2D3748', // Primary Text Color
        textSecondary: '#718096', // Secondary Text Color
        highlight: '#F6AD55', // Highlight Color (Orange)
    },
    styles: {
        global: {
            body: {
                backgroundColor: 'var(--background-color)',
                color: 'var(--text-color)',
            },
            h1: {
                color: 'var(--main-color)',
            },
            a: {
                color: 'var(--accent-color)',
                _hover: {
                    color: 'var(--highlight-color)',
                },
            },
        },
    },
});

export default theme;