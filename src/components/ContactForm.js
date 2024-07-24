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
    <Container maxW={'full'} py={12}>
      <Stack spacing={8} textAlign="center">
        <Heading color={'var(--main-color)'}>Contact Us</Heading>
        <Text color={'var(--text-light-color)'} fontSize={'lg'}>
          We’d love to hear from you! Fill out the form below to get in touch with us.
        </Text>
        <Box
          as="form"
          mt={8}
          p={6}
          rounded={'md'}
          shadow={'lg'}
          bg={'var(--background-color)'}
          border={`1px solid var(--main-color-dark)`}
          width="100%"
          onSubmit={handleSubmit} // Connect the form submit handler
        >
          <Stack spacing={4}>
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              isRequired
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isRequired
            />
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              isRequired
              rows={6}
            />
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
      </Stack>
    </Container>
  )
}