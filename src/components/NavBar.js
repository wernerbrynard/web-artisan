// src/components/NavBar.js
'use client'

import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Stack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Lockup } from './Logo';
import { Arrow } from './ui';
import { navLinks as links, contactHref } from '@/data/nav';

const MotionBox = motion(Box);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const contact = contactHref(pathname);
  const close = () => setIsOpen(false);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close the menu if the window grows to desktop width (for example on rotation),
  // where the menu and its button are hidden and the page would stay locked.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 48em)');
    const onChange = (event) => {
      if (event.matches) setIsOpen(false);
    };
    desktop.addEventListener('change', onChange);
    return () => desktop.removeEventListener('change', onChange);
  }, []);

  // A link to the page you are already on scrolls back to the top.
  const handleNavClick = (event, href) => {
    const normalise = (p) => (p || '').replace(/\/$/, '') || '/';
    if (normalise(pathname) === normalise(href)) {
      event.preventDefault();
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), isOpen ? 100 : 0);
    }
    close();
  };

  // From the mobile menu, wait for the scroll lock to lift before scrolling to the form.
  const handleMobileContact = (event) => {
    const form = document.getElementById('contact-form');
    close();
    if (form) {
      event.preventDefault();
      setTimeout(() => form.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  return (
    <Box as="header" bg="stone" borderBottom="1px solid" borderColor="line" position="sticky" top={0} zIndex={1000}>
      <Container maxW="6xl">
        <Flex h="72px" align="center" justify="space-between">
          <ChakraLink as={NextLink} href="/" onClick={(e) => handleNavClick(e, '/')} color="ink" _hover={{ textDecoration: 'none' }} aria-label="Web Artisan Studios, home">
            <Lockup />
          </ChakraLink>

          <Flex as="nav" align="center" gap={7} display={{ base: 'none', md: 'flex' }}>
            {links.map((link) => (
              <ChakraLink key={link.href} as={NextLink} href={link.href} onClick={(e) => handleNavClick(e, link.href)} color="ink" fontWeight={500} fontSize="15px" _hover={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                {link.label}
              </ChakraLink>
            ))}
            <Button as="a" href={contact} size="sm" px={4} h="38px">
              Start a project
              <Arrow />
            </Button>
          </Flex>

          <IconButton
            icon={isOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon boxSize={5} />}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            variant="line"
            onClick={() => setIsOpen((open) => !open)}
            display={{ base: 'flex', md: 'none' }}
            zIndex={2001}
          />
        </Flex>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <MotionBox
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            position="fixed"
            top="73px"
            left={0}
            right={0}
            bottom={0}
            bg="ink"
            color="stone"
            zIndex={2000}
            display={{ base: 'block', md: 'none' }}
            px={6}
            py={10}
          >
            <Stack as="nav" spacing={6}>
              {links.map((link) => (
                <ChakraLink key={link.href} as={NextLink} href={link.href} onClick={(e) => handleNavClick(e, link.href)} fontFamily="heading" fontStretch="114%" fontWeight={700} fontSize="4xl" letterSpacing="-0.02em" color="stone" _hover={{ textDecoration: 'none', color: 'brass' }}>
                  {link.label}
                </ChakraLink>
              ))}
              <Box pt={4}>
                <Button as="a" href={contact} onClick={handleMobileContact} variant="stone" size="lg">
                  Start a project
                  <Arrow />
                </Button>
              </Box>
            </Stack>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
}
