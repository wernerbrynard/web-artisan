// src/components/Hero.js
'use client'

import {
  Box,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react'
import GradientBanner from './GradientBanner';
import ScrollToButton from './ScrollToButton';

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
          direction={{ base: 'column', sm: 'row' }}
          spacing={6}
          align={'center'}
          justify={'center'}
          position={'relative'}
        >
          <ScrollToButton
            targetId={'contact-form'}
            bg={'var(--accent-color)'}
            color={'white'}
            rounded={'full'}
            size={'lg'}
            px={8}
            _hover={{
              bg: 'var(--button-hover-color)',
              color: 'white',
            }}
          >
            Get Started
          </ScrollToButton>
          <ScrollToButton
            targetId={'about'}
            variant={'outline'}
            color={'white'}
            borderColor={'whiteAlpha.800'}
            rounded={'full'}
            size={'lg'}
            px={8}
            _hover={{
              bg: 'whiteAlpha.200',
            }}
          >
            Learn More
          </ScrollToButton>
        </Stack>
      </Stack>
    </GradientBanner>
  )
}
