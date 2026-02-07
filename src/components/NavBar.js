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
  Stack,
  Link as ChakraLink,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);
const MotionLink = motion(ChakraLink);

export default function NavBar() {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const pathname = usePathname();

  const handleNavClick = (e, path) => {
    const normalize = (p) => (p || '').replace(/\/$/, '') || '/';
    if (normalize(pathname) === normalize(path)) {
      e.preventDefault();
      // Delay scrolling slightly to handle mobile drawer closing (unlocking body scroll)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    onClose();
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactElement = document.getElementById('contact-form');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
    onClose(); // Close the drawer after navigating
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "circle(0% at calc(100% - 40px) 40px)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      clipPath: "circle(150% at calc(100% - 40px) 40px)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }
  };

  const listVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    }
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
        <ChakraLink as={NextLink} href="/" _hover={{ textDecoration: 'none' }} onClick={(e) => handleNavClick(e, '/')}>
          <Flex alignItems={'center'}>
            <Image
              src="/images/logo.jpeg"
              alt="Logo"
              boxSize="50px"
              style={{ borderRadius: '4px' }}
            />
            <Heading as="span" ml={4} fontSize="lg" color="var(--main-color)">
              Web Artisan
            </Heading>
          </Flex>
        </ChakraLink>
        <Flex alignItems={'center'} display={{ base: 'none', md: 'flex' }} ml="auto">
          <ChakraLink as={NextLink} href="/about" ml={4} color="var(--main-color)" onClick={(e) => handleNavClick(e, '/about')} _hover={{ color: 'var(--accent-color)' }}>
            About
          </ChakraLink>
          <ChakraLink href="#contact-form" onClick={handleScrollToContact} ml={4} color="var(--main-color)" _hover={{ color: 'var(--accent-color)' }}>
            Contact
          </ChakraLink>
        </Flex>
        
        {/* Mobile Hamburger Menu Button */}
        <IconButton
          ref={btnRef}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          variant="ghost"
          onClick={isOpen ? onClose : onOpen}
          display={{ base: 'flex', md: 'none' }}
          color="var(--main-color)"
          _hover={{ bg: 'transparent', color: 'var(--accent-color)' }}
          zIndex={2001} // Ensure button is above the overlay
        />

        {/* Full Screen Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <MotionBox
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              position="fixed"
              top={0}
              left={0}
              width="100vw"
              height="100vh"
              bg="var(--background-color)"
              zIndex={2000}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Stack 
                as={motion.div} 
                variants={listVariants} 
                spacing={8} 
                textAlign="center"
              >
                <MotionBox variants={itemVariants}>
                  <ChakraLink 
                    as={NextLink} 
                    href="/" 
                    onClick={(e) => handleNavClick(e, '/')} 
                    fontSize="4xl" 
                    fontWeight="bold"
                    color="var(--main-color)" 
                    _hover={{ color: 'var(--accent-color)', textDecoration: 'none' }}
                  >
                    Home
                  </ChakraLink>
                </MotionBox>
                <MotionBox variants={itemVariants}>
                  <ChakraLink 
                    as={NextLink} 
                    href="/about" 
                    onClick={(e) => handleNavClick(e, '/about')} 
                    fontSize="4xl" 
                    fontWeight="bold"
                    color="var(--main-color)" 
                    _hover={{ color: 'var(--accent-color)', textDecoration: 'none' }}
                  >
                    About
                  </ChakraLink>
                </MotionBox>
                <MotionBox variants={itemVariants}>
                  <ChakraLink 
                    href="#contact-form" 
                    onClick={handleScrollToContact} 
                    fontSize="4xl" 
                    fontWeight="bold"
                    color="var(--main-color)" 
                    _hover={{ color: 'var(--accent-color)', textDecoration: 'none' }}
                  >
                    Contact
                  </ChakraLink>
                </MotionBox>
              </Stack>
            </MotionBox>
          )}
        </AnimatePresence>
      </Flex>
    </Box>
  );
}