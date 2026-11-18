// src/components/Footer.js
'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Container, Flex, Link as ChakraLink, Stack, Text } from '@chakra-ui/react';
import { Stamp } from './Logo';
import { CookieSettingsLink } from './Consent';
import { studio } from '@/data/work';
import { navLinks, contactHref } from '@/data/nav';

const Footer = () => {
  const pathname = usePathname();
  const links = [...navLinks, { href: contactHref(pathname), label: 'Start a project' }];
  return (
    <Box as="footer" bg="ink" color="stone">
      <Container maxW="6xl" py={{ base: 10, md: 14 }}>
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align={{ base: 'flex-start', md: 'center' }} gap={8}>
          <Flex align="center" gap={6}>
            <Stamp size={112} />
            <Stack spacing={1}>
              <Text fontFamily="heading" fontStretch="114%" fontWeight={700} fontSize="xl" letterSpacing="-0.01em">
                Web Artisan Studios
              </Text>
              <Text color="mist" fontSize="sm">
                Websites, online shops and apps. Cape Town, since {studio.since}.
              </Text>
            </Stack>
          </Flex>
          <Flex as="nav" gap={{ base: 4, md: 7 }} wrap="wrap">
            {links.map((link) => (
              <ChakraLink key={link.label} as={NextLink} href={link.href} color="stone" fontWeight={500} fontSize="15px" _hover={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                {link.label}
              </ChakraLink>
            ))}
          </Flex>
        </Flex>
        <Flex mt={10} pt={6} borderTop="1px solid" borderColor="lineOnInk" color="mist" fontFamily="mono" fontSize="12px" letterSpacing="0.06em" direction={{ base: 'column', md: 'row' }} justify="space-between" gap={4}>
          <Text>
            &copy; {new Date().getFullYear()} Web Artisan Studios (Pty) Ltd · Reg. 2025/012325/07
          </Text>
          <Flex as="nav" aria-label="Legal" gap={5} wrap="wrap">
            <ChakraLink as={NextLink} href="/privacy" color="mist" _hover={{ color: 'stone' }}>
              Privacy and cookies
            </ChakraLink>
            <ChakraLink as={NextLink} href="/terms" color="mist" _hover={{ color: 'stone' }}>
              Terms
            </ChakraLink>
            <CookieSettingsLink color="mist" textDecoration="none" letterSpacing="0.06em" _hover={{ color: 'stone' }} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
