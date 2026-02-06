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
          fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
          lineHeight={'110%'}
          color={'var(--main-color)'}
        >
          Digital Craftsmanship
        </Heading>
        <Text
          color={'var(--text-light-color)'}
          fontSize={'lg'}
          maxW={'4xl'}
          mx={'auto'}
          textAlign={useBreakpointValue({ base: 'left', md: 'center' })}
        >
          We engineer bespoke digital platforms for specialized industries and ambitious ventures. From fintech to adventure sports, our Cape Town studio builds for speed, scale, and impact.
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