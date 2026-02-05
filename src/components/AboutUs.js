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
          <Text color={'var(--text-light-color)'} fontSize={'lg'} maxW="3xl">
            Web Artisan Studios, based in Cape Town, is a digital agency dedicated to crafting exceptional web experiences. We combine creative design with robust engineering to deliver custom solutions that drive business growth. From local partners to international enterprises, we help brands establish a commanding digital presence.
          </Text>
          <Text color={'var(--text-light-color)'} fontSize={'lg'} maxW="3xl">
            Founded on the principles of craftsmanship and technical excellence, Web Artisan Studios (PTY) LTD partners with clients to navigate the complex digital landscape. Our team leverages cutting-edge technologies like React, Next.js, and Cloud Infrastructure to build scalable, high-performance applications.
          </Text>
          <Text color={'var(--text-light-color)'} fontSize={'lg'} mb={6} maxW="3xl">
            With leadership grounded in years of industry experience, we bring a level of professionalism and insight that ensures every project is delivered to the highest standard.
          </Text>
          <Stack spacing={6} align={'center'}>
            <ScrollToContactButton />
          </Stack>
        </Stack>
    </Container>
  );
}