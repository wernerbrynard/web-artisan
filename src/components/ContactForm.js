'use client'

import {
  Container,
  Box,
  Heading,
  Stack,
  Text,
  Input,
  Textarea,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function ContactForm() {
  return (
    <Container maxW={'5xl'} py={12}>
      <Heading color={'var(--main-color)'} mb={6} textAlign={'center'}>
        Contact Us
      </Heading>
      <Box
        bg={'var(--background-color)'}
        p={6}
        rounded={'md'}
        shadow={'lg'}
        border={`1px solid var(--main-color-dark)`}
      >
        <Stack spacing={6}>
          <Stack spacing={4}>
            <Text color={'var(--text-light-color)'} fontSize={'lg'}>
              We’d love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Input
              placeholder="Your Name"
              variant="outline"
              borderColor={'var(--main-color-dark)'}
              _focus={{ borderColor: 'var(--main-color)' }}
            />
            <Input
              placeholder="Your Email"
              type="email"
              variant="outline"
              borderColor={'var(--main-color-dark)'}
              _focus={{ borderColor: 'var(--main-color)' }}
            />
            <Input
              placeholder="Subject"
              variant="outline"
              borderColor={'var(--main-color-dark)'}
              _focus={{ borderColor: 'var(--main-color)' }}
            />
            <Textarea
              placeholder="Your Message"
              variant="outline"
              borderColor={'var(--main-color-dark)'}
              _focus={{ borderColor: 'var(--main-color)' }}
            />
          </Stack>
          <Stack spacing={4} align={'center'}>
            <Button
              colorScheme={'accent-color'}
              bg={'var(--accent-color)'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'var(--button-hover-color)',
              }}
            >
              Send Message
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}