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

export default function AboutUs() {
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
            Web Artisan Studios, based in Cape Town, is a digital agency dedicated to crafting exceptional web experiences. We combine creative design with robust engineering to deliver custom solutions that drive business growth. From local partners to international enterprises, we help brands establish a commanding digital presence.
          </Text>
          <Text color={'var(--text-light-color)'} fontSize={'lg'}>
            Founded on the principles of craftsmanship and technical excellence, Web Artisan Studios (PTY) LTD partners with clients to navigate the complex digital landscape. Our team leverages cutting-edge technologies like React, Next.js, and Cloud Infrastructure to build scalable, high-performance applications.
          </Text>
          <Text color={'var(--text-light-color)'} fontSize={'lg'} mb={6}>
            With leadership grounded in years of industry experience, we bring a level of professionalism and insight that ensures every project is delivered to the highest standard.
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