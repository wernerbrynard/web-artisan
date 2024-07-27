// src/components/Footer.js
import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box as="footer" py={4} bg="var(--main-color)" color="white" textAlign="center">
            <Text fontSize="sm">&copy; {new Date().getFullYear()} Web Artisan. All rights reserved.</Text>
            {/* <Text fontSize="sm">
                <Link href="/about-werner" color="white" _hover={{ color: "var(--accent-color)" }}>
                    About
                </Link>
            </Text> */}
        </Box>
    );
};

export default Footer;