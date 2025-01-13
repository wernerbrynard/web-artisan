// src/components/Footer.js
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={4} bg="var(--main-color)" color="white" textAlign="center">
      <Text fontSize="sm">
        &copy; {new Date().getFullYear()} Web Artisan Studios (PTY) LTD. All rights reserved.
      </Text>
      <Text fontSize="xs" mt={2}>
        Registration No: 2025/012325/07
      </Text>
    </Box>
  );
};

export default Footer;