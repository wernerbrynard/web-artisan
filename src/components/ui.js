// src/components/ui.js
'use client';

import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';

// Small uppercase mono label used above headings and for details.
export function Label({ children, ...props }) {
  return (
    <Text fontFamily="mono" fontSize="12px" letterSpacing="0.1em" textTransform="uppercase" color="steel" {...props}>
      {children}
    </Text>
  );
}

// Label plus heading that opens a section. `dark` is for use on an ink band.
// Anything passed as children sits under the heading.
export function SectionHeader({ label, title, dark = false, children, ...props }) {
  return (
    <Stack spacing={3} {...props}>
      <Label color={dark ? 'mist' : 'steel'}>{label}</Label>
      <Heading as="h2" fontSize={{ base: '2rem', md: '2.9rem' }} sx={{ textWrap: 'balance' }}>
        {title}
      </Heading>
      {children}
    </Stack>
  );
}

// Full-width band with a top rule and a centred container. `dark` gives the ink version.
export function Band({ children, dark = false, id, py = { base: 14, md: 20 }, ...props }) {
  return (
    <Box
      as="section"
      id={id}
      bg={dark ? 'ink' : undefined}
      color={dark ? 'stone' : undefined}
      borderTop="1px solid"
      borderColor={dark ? 'ink' : 'line'}
      {...props}
    >
      <Container maxW="6xl" py={py}>
        {children}
      </Container>
    </Box>
  );
}

// Brass underline for one word in a headline.
export function Underline({ children }) {
  return (
    <Box
      as="span"
      bgImage="linear-gradient(var(--chakra-colors-brass), var(--chakra-colors-brass))"
      bgRepeat="no-repeat"
      bgSize="100% 0.14em"
      bgPosition="0 92%"
    >
      {children}
    </Box>
  );
}

// Arrow used on buttons and links. Brass by default.
export function Arrow({ color = 'brass' }) {
  return (
    <Box as="span" aria-hidden="true" color={color} ml={2}>
      →
    </Box>
  );
}
