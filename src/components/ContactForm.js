// src/components/ContactForm.js
'use client'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Arrow, Band, SectionHeader } from './ui'

const fieldStyles = {
  bg: 'paper',
  borderColor: 'lineStrong',
  borderRadius: '4px',
  _hover: { borderColor: 'ink' },
  _focusVisible: { borderColor: 'ink', boxShadow: '0 0 0 1px var(--chakra-colors-ink)' },
}

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      toast({
        title: 'Message sent',
        description: 'We have your message and will reply soon.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      toast({
        title: 'Your message was not sent',
        description: 'Something went wrong on our side. Please try again in a few minutes.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
    setIsSubmitting(false)
  }

  return (
    <Band id="contact-form">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }}>
        <SectionHeader label="Start a project" title="Tell us what you need built.">
          <Text color="steel" maxW="44ch">
            A few lines is enough. We are based in Cape Town and work with clients anywhere.
          </Text>
        </SectionHeader>

        <Box as="form" onSubmit={handleSubmit}>
          <Stack spacing={5}>
            <FormControl isRequired>
              <FormLabel htmlFor="contact-name" fontWeight={600} fontSize="sm">Your name</FormLabel>
              <Input id="contact-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" {...fieldStyles} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="contact-email" fontWeight={600} fontSize="sm">Your email</FormLabel>
              <Input id="contact-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" {...fieldStyles} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="contact-message" fontWeight={600} fontSize="sm">What do you need?</FormLabel>
              <Textarea id="contact-message" value={message} onChange={(e) => setMessage(e.target.value)} rows={6} {...fieldStyles} />
            </FormControl>
            <Box>
              <Button type="submit" size="lg" isLoading={isSubmitting} loadingText="Sending">
                Send message
                <Arrow />
              </Button>
            </Box>
          </Stack>
        </Box>
      </SimpleGrid>
    </Band>
  )
}
