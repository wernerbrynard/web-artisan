// src/components/Footer.js
'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Container, Flex, Link as ChakraLink, Stack, Text } from '@chakra-ui/react';
import { Stamp } from './Logo';
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
        <Text mt={10} pt={6} borderTop="1px solid" borderColor="lineOnInk" color="mist" fontFamily="mono" fontSize="12px" letterSpacing="0.06em">
          &copy; {new Date().getFullYear()} Web Artisan Studios (Pty) Ltd · Reg. 2025/012325/07
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
