'use client';

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import ScrollToContactButton from './ScrollToContactButton';

export default function AboutMe() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4} textAlign="left">
          <Heading
            color={'var(--main-color)'}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          >
            About Web Artisan
          </Heading>
          <Text color={'var(--text-light-color)'} fontSize={'lg'}>
            At Web Artisan, proudly based in Cape Town, we combine creative expertise with technical know-how to deliver custom web solutions tailored to your business needs. Whether you&apos;re a local business or an international organisation, we can help you achieve your goals.
          </Text>
          <Text color={'var(--text-light-color)'} fontSize={'lg'}>
            Led by Werner&apos;s extensive experience in technologies like React, Next.js, and JavaScript, Web Artisan Studios (PTY) LTD is a trusted partner for businesses locally and globally. As a registered private company in South Africa, we are committed to delivering professional, user-friendly, and innovative web solutions.
          </Text>
          <Text color={'var(--text-light-color)'} fontSize={'lg'} mb={6}>
            Whether you&apos;re a small business establishing your online presence or a larger organisation needing advanced web applications, Web Artisan is equipped to help you achieve your goals.
          </Text>
          <Stack spacing={6} align={'center'}>
            <ScrollToContactButton />
          </Stack>
        </Stack>
        <Flex direction="column" align="center" justify="center">
          <Box position="relative" display="inline-block">
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={'/images/me.webp'} // Update this path with your actual image path
              objectFit={'cover'}
            />
            <Box
              position="absolute"
              bottom="4"
              right="4"
              bg={useColorModeValue('rgba(0, 0, 0, 0.6)', 'rgba(255, 255, 255, 0.6)')}
              color={useColorModeValue('white', 'black')}
              p={2}
              rounded={'md'}
            >
              <Text fontSize="lg" fontWeight="bold">
                Werner Brynard
              </Text>
            </Box>
          </Box>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}