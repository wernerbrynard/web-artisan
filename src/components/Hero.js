// src/components/Hero.js
'use client'

import {
  Box,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react'
import GradientBanner from './GradientBanner';
import ScrollToContactButton from './ScrollToContactButton';

export default function CallToActionWithAnnotation() {
  return (
    <GradientBanner>
      <Stack
        as={Box}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 24, md: 40 }}
        textAlign="center"
      >
        <Heading
          fontWeight={700}
          fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
          lineHeight={'110%'}
          color={'white'}
        >
          Digital Craftsmanship
        </Heading>
        <Text
          color={'whiteAlpha.800'}
          fontSize={{ base: 'md', md: 'xl' }}
          maxW={'3xl'}
          mx={'auto'}
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
    </GradientBanner>
  )
}
