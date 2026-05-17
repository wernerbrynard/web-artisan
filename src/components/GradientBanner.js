// src/components/GradientBanner.js
'use client'

import { Box, Container } from '@chakra-ui/react'

// Full-width brand-gradient band with layered abstract shapes.
// Shared by the homepage hero and the About page header.
export default function GradientBanner({ children, maxW = '6xl' }) {
  return (
    <Box
      position="relative"
      overflow="hidden"
      bgGradient="linear(to-br, var(--main-color-dark), var(--main-color) 55%, #1c5f72)"
    >
      {/* Decorative abstract shapes */}
      <Box
        position="absolute"
        top={{ base: '-90px', md: '-130px' }}
        right={{ base: '-110px', md: '-50px' }}
        w={{ base: '260px', md: '440px' }}
        h={{ base: '260px', md: '440px' }}
        bg="var(--accent-color)"
        opacity={0.25}
        rounded="full"
        filter="blur(50px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom={{ base: '-140px', md: '-180px' }}
        left={{ base: '-120px', md: '-70px' }}
        w={{ base: '300px', md: '500px' }}
        h={{ base: '300px', md: '500px' }}
        bg="#1c5f72"
        opacity={0.5}
        rounded="full"
        filter="blur(60px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top={{ base: '38%', md: '28%' }}
        left={{ base: '8%', md: '14%' }}
        w={{ base: '70px', md: '110px' }}
        h={{ base: '70px', md: '110px' }}
        border="2px solid"
        borderColor="whiteAlpha.300"
        rounded="2xl"
        transform="rotate(18deg)"
        pointerEvents="none"
        display={{ base: 'none', md: 'block' }}
      />
      <Box
        position="absolute"
        bottom="20%"
        right={{ base: '8%', md: '18%' }}
        w={{ base: '46px', md: '78px' }}
        h={{ base: '46px', md: '78px' }}
        bg="var(--highlight-color)"
        opacity={0.3}
        rounded="full"
        pointerEvents="none"
      />

      <Container maxW={maxW} position="relative" zIndex={1}>
        {children}
      </Container>
    </Box>
  )
}
