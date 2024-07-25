// src/components/AboutMe.js
'use client'

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
} from '@chakra-ui/react'
import ScrollToContactButton from './ScrollToContactButton'

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
            At Web Artisan, we combine creative expertise with technical know-how to deliver custom web solutions tailored to your business needs. Led by Werner Brynard, a developer with over nine years of experience in front-end and full-stack development, we pride ourselves on understanding your goals and delivering solutions that drive success.
          </Text>
          <Text color={'var(--text-light-color)'} fontSize={'lg'}>
            Werner's experience in technologies like React, Next.js, and JavaScript, along with his focus on user-friendly design, positions Web Artisan to tackle a wide range of projects.
          </Text>
          <Text color={'var(--text-light-color)'} fontSize={'lg'} mb={6}>
            Whether you're a small business establishing your online presence or a larger organization needing advanced web applications, Web Artisan is equipped to help you achieve your goals.
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
  )
}