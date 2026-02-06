'use client';

import {
  Container,
  Heading,
  Text,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import ScrollToContactButton from './ScrollToContactButton';

export default function AboutUs() {
  return (
    <Container maxW={'5xl'} py={12}>
        <Stack spacing={4} textAlign="center" alignItems="center">
          <Heading
            color={'var(--main-color)'}
            textAlign="center"
            mb={4}
          >
            About Web Artisan
          </Heading>
          <Text color={'var(--text-light-color)'} fontSize={'lg'} maxW="4xl">
            Web Artisan Studios is a digital product agency dedicated to crafting exceptional software. We combine creative design with robust engineering to deliver specialized solutions that drive business growth. From local motorsport brands to international enterprises, we help clients establish a commanding digital presence.
          </Text>
          <Text color={'var(--text-light-color)'} fontSize={'lg'} maxW="4xl">
            Founded on the principles of craftsmanship and technical excellence, Web Artisan Studios (PTY) LTD partners with clients to navigate the complex digital landscape. Our team leverages cutting-edge technologies like React, Next.js, and Cloud Infrastructure to build scalable, high-performance applications.
          </Text>
          <Text color={'var(--text-light-color)'} fontSize={'lg'} mb={6} maxW="4xl">
            With leadership grounded in years of industry experience, we bring a level of professionalism and insight that ensures every project is delivered to the highest standard.
          </Text>
          <Stack spacing={6} align={'center'}>
            <ScrollToContactButton />
          </Stack>
        </Stack>
    </Container>
  );
}