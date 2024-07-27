// src/pages/_app.js
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../app/globals.scss";
import NavBar from "@/components/NavBar";

const theme = extendTheme({
    // Your custom theme settings
    colors: {
        main: '#103948',
        accent: '#2f9e44',
        // Define more custom colors if needed
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
                color: 'var(--main-color)',
                _hover: {
                    color: 'var(--main-color-light)',
                },
            },
        },
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <NavBar />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;