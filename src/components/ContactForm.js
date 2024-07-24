'use client'

import {
  Container,
  Box,
  Stack,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase-config'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    try {
      await addDoc(collection(db, 'contactMessages'), {
        name,
        email,
        message,
        createdAt: new Date(),
      })
      toast({
        title: 'Message sent!',
        description: 'We have received your message and will get back to you soon.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      toast({
        title: 'Error sending message.',
        description: 'There was an error sending your message. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
    setIsSubmitting(false)
  }

  return (
    <Container id='contact-form' maxW={'5xl'} py={12}>
      <Heading color={'var(--main-color)'} mb={6} textAlign={'center'}>
        Contact Us
      </Heading>
      <Box
        as="form"
        bg={'var(--background-color)'}
        p={6}
        rounded={'md'}
        shadow={'lg'}
        border={`1px solid var(--main-color-dark)`}
        onSubmit={handleSubmit}
      >
        <Stack spacing={6}>
          <Stack spacing={4}>
            <Text color={'var(--text-light-color)'} fontSize={'lg'}>
              We’d love to hear from you! Please fill out the form below, and we’ll get back to you as soon as possible.
            </Text>
            <Stack spacing={4}>
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isRequired
                variant="outline"
                borderColor={'var(--main-color-dark)'}
                _focus={{ borderColor: 'var(--main-color)' }}
              />
              <Input
                placeholder="Your Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isRequired
                variant="outline"
                borderColor={'var(--main-color-dark)'}
                _focus={{ borderColor: 'var(--main-color)' }}
              />
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                isRequired
                rows={6}
                variant="outline"
                borderColor={'var(--main-color-dark)'}
                _focus={{ borderColor: 'var(--main-color)' }}
              />
            </Stack>
          </Stack>
          <Stack spacing={4} align={'center'}>
            <Button
              type="submit"
              colorScheme={'accent-color'}
              bg={'var(--accent-color)'}
              rounded={'full'}
              px={6}
              isLoading={isSubmitting}
              _hover={{
                bg: 'var(--button-hover-color)',
              }}
              maxW="200px"
            >
              Send Message
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}