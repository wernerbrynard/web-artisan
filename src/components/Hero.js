// src/components/Hero.js
'use client'

import { Box, Button, Container, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { Arrow, Label, Underline } from './ui';
import { Stamp } from './Logo';

export default function Hero() {
  return (
    <Box as="section">
      <Container maxW="6xl" pt={{ base: 14, md: 24 }} pb={{ base: 14, md: 20 }}>
        <Stack spacing={{ base: 10, md: 16 }}>
          <Flex align="center" justify="space-between" gap={10}>
            <Heading
              as="h1"
              fontSize={{ base: '2.9rem', sm: '4rem', md: '5.4rem', lg: '6.4rem' }}
              lineHeight={0.98}
              letterSpacing="-0.035em"
              maxW="12ch"
            >
              Built to go the <Underline>distance.</Underline>
            </Heading>
            <Box display={{ base: 'none', lg: 'block' }} flex="none" mr={4}>
              <Stamp size={250} spin />
            </Box>
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="end">
            <Stack spacing={4}>
              <Label>Cape Town · 34°S 18°E</Label>
              <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="50ch">
                We build websites, online shops and apps.
                <br />
                Then we stay and look after them.
              </Text>
            </Stack>
            <Flex gap={3} wrap="wrap" justify={{ base: 'flex-start', md: 'flex-end' }}>
              <Button as="a" href="#work" size="lg">
                See the work
                <Arrow />
              </Button>
              <Button as="a" href="#contact-form" size="lg" variant="line">
                Start a project
              </Button>
            </Flex>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
