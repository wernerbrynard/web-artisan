// src/pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import "../app/globals.scss";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import theme from "../theme/theme"; // Import the shared theme

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </ChakraProvider>
    );
}

export default MyApp;