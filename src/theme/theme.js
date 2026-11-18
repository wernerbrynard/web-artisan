// src/theme/theme.js
import { extendTheme } from "@chakra-ui/react";

// Brand tokens. Cool stone page, deep ink text, a little brass for details.
export const brand = {
    stone: '#edf0f0', // page background
    paper: '#f6f8f8', // cards on stone
    panel: '#dfe5e5', // quiet panels
    ink: '#0f222b', // text, buttons, dark sections
    ink2: '#1b3541', // hover on ink, raised surfaces on ink
    steel: '#586b73', // secondary text on light
    mist: '#9fb1b7', // secondary text on ink
    brass: '#c9981f', // details only: an underline, an arrow, one part of the logo
    line: 'rgba(15, 34, 43, 0.15)',
    lineStrong: 'rgba(15, 34, 43, 0.4)',
    lineOnInk: 'rgba(237, 240, 240, 0.18)',
};

const theme = extendTheme({
    fonts: {
        heading: 'var(--font-archivo), "Helvetica Neue", Arial, sans-serif',
        body: 'var(--font-instrument), "Helvetica Neue", Arial, sans-serif',
        mono: 'var(--font-plex-mono), ui-monospace, Menlo, monospace',
    },
    colors: brand,
    styles: {
        global: {
            body: {
                bg: 'stone',
                color: 'ink',
                lineHeight: 1.6,
            },
        },
    },
    components: {
        Heading: {
            baseStyle: {
                fontWeight: 700,
                fontStretch: '114%',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: 'inherit',
            },
        },
        Button: {
            baseStyle: {
                borderRadius: '4px',
                fontWeight: 600,
            },
            variants: {
                ink: {
                    bg: 'ink',
                    color: 'stone',
                    _hover: { bg: 'ink2', _disabled: { bg: 'ink' } },
                },
                stone: {
                    bg: 'stone',
                    color: 'ink',
                    _hover: { bg: 'white' },
                },
                line: {
                    bg: 'transparent',
                    color: 'inherit',
                    border: '1.5px solid',
                    borderColor: 'lineStrong',
                    _hover: { borderColor: 'currentColor' },
                },
            },
            defaultProps: {
                variant: 'ink',
            },
        },
    },
});

export default theme;
