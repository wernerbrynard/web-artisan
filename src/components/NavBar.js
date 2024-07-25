// src/components/NavBar.js
'use client'

import {
  Box,
  Flex,
  Image,
  useColorMode,
  useTheme,
  Heading,
} from '@chakra-ui/react'
import { useState } from 'react';

export default function NavBar() {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const [navExpanded, setNavExpanded] = useState(false);

  const handleToggle = () => setNavExpanded(!navExpanded);

  return (
    <Box
      bg={colorMode === 'light' ? 'var(--background-color)' : 'gray.800'}
      px={4}
      borderBottom={`1px solid ${theme.colors['var(--main-color-dark)']}`}
      position="sticky" // Use 'sticky' for better performance and ease
      top={0}
      zIndex={1000} // Ensure it's above other elements
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Flex alignItems={'center'}>
          <Image
            src={"/images/logo.jpeg"} // Replace with your logo path
            alt={'Logo'}
            boxSize="50px" // Adjust size as needed
          />
          <Heading as="h1" ml={4} fontSize="lg" color="var(--main-color)">
            Web Artisan
          </Heading>
        </Flex>
        {/* Add mobile menu toggle button and other nav items here */}
      </Flex>
    </Box>
  );
}