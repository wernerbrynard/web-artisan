// src/components/Hero.js
'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react'
import ScrollToContactButton from './ScrollToContactButton';

export default function CallToActionWithAnnotation() {
  return (
    <Container maxW={'6xl'}>
      <Stack
        as={Box}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
        textAlign="center" // Ensure the title is always center-aligned
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
          color={'var(--main-color)'}
        >
          Empower Your Business with a Professional Website
          <br />
          <Text as={'span'} color={'var(--accent-color)'}>
            Unlock Your Potential
          </Text>
        </Heading>
        <Text
          color={'var(--text-light-color)'}
          fontSize={'lg'}
          textAlign={useBreakpointValue({ base: 'left', md: 'center' })}
        >
          At Web Artisan, based in Cape Town, we specialise in creating custom web solutions that meet your unique needs. From dynamic websites to complex web applications, our focus is on delivering effective and user-friendly digital experiences. Connect with us to see how we can help transform your digital strategy and achieve your online goals.
        </Text>
        <Stack
          direction={'column'}
          spacing={6}
          align={'center'}
          position={'relative'}
        >
          <ScrollToContactButton />
        </Stack>
      </Stack>
    </Container>
  )
}