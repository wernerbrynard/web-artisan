'use client'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react'

export default function AboutMe() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4} textAlign="left">
          <Heading color={'var(--main-color)'}>About Web Artisan</Heading>
          <Text color={'var(--text-light-color)'} fontSize={'lg'}>
            At Web Artisan, we specialise in creating custom web solutions that meet your unique needs. From dynamic websites to complex web applications, our focus is on delivering effective and user-friendly digital experiences.
            <br /><br />
            Our team, led by an experienced developer, is dedicated to understanding your goals and delivering tailored solutions that drive success. We bring creativity and expertise to every project, ensuring your online presence stands out.
            <br /><br />
            Connect with us to see how Web Artisan can help transform your digital strategy and achieve your online goals.
          </Text>
          <Stack spacing={4} align={'center'}>
            <Button
              colorScheme={'accent-color'}
              bg={'var(--accent-color)'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'var(--button-hover-color)',
              }}
              alignSelf={'center'}
            >
              Get in Touch
            </Button>
          </Stack>
        </Stack>
        <Flex direction="column" align="center" justify="center">
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={'/images/me.webp'} // Update this path with your actual image path
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}