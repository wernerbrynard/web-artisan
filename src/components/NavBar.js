// src/components/NavBar.js
'use client'

import React from 'react';
import {
  Box,
  Flex,
  Image,
  useColorMode,
  useTheme,
  Heading,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Link as ChakraLink,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

export default function NavBar() {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactElement = document.getElementById('contact-form');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
    onClose(); // Close the drawer after navigating
  };

  return (
    <Box
      bg={colorMode === 'light' ? 'var(--background-color)' : 'gray.800'}
      px={4}
      borderBottom={`1px solid ${theme.colors.mainColorDark || 'var(--main-color-dark)'}`}
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <ChakraLink as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
          <Flex alignItems={'center'}>
            <Image
              src="/images/logo.jpeg"
              alt="Logo"
              boxSize="50px"
            />
            <Heading as="span" ml={4} fontSize="lg" color="var(--main-color)">
              Web Artisan
            </Heading>
          </Flex>
        </ChakraLink>
        <Flex alignItems={'center'} display={{ base: 'none', md: 'flex' }} ml="auto">
          <ChakraLink as={NextLink} href="/about-werner" ml={4} color="var(--main-color)">
            About
          </ChakraLink>
          <ChakraLink href="#contact-form" onClick={handleScrollToContact} ml={4} color="var(--main-color)">
            Contact
          </ChakraLink>
        </Flex>
        {/* Mobile Hamburger Menu */}
        <IconButton
          ref={btnRef}
          icon={<HamburgerIcon />}
          variant="outline"
          onClick={onOpen}
          display={{ base: 'flex', md: 'none' }}
          color="var(--main-color)"
          borderColor="var(--main-color)"
          _hover={{ bg: 'var(--accent-color)', color: 'white' }}
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={colorMode === 'light' ? 'var(--background-color)' : 'gray.700'}>
            <DrawerCloseButton color={colorMode === 'light' ? 'var(--main-color)' : 'white'} />
            <DrawerHeader borderBottomWidth="1px" borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}>
              Web Artisan
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing={4}>
                <ChakraLink as={NextLink} href="/" onClick={onClose} color="var(--text-color)" _hover={{ color: 'var(--accent-color)' }}>
                  Home
                </ChakraLink>
                <ChakraLink as={NextLink} href="/about-werner" onClick={onClose} color="var(--text-color)" _hover={{ color: 'var(--accent-color)' }}>
                  About
                </ChakraLink>
                <ChakraLink href="#contact-form" onClick={handleScrollToContact} color="var(--text-color)" _hover={{ color: 'var(--accent-color)' }}>
                  Contact
                </ChakraLink>
                {/* Add more links as needed */}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}