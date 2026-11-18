// src/components/ContactForm.js
'use client'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import NextLink from 'next/link'
import { Arrow, Band, Label, SectionHeader } from './ui'
import { Mark } from './Logo'

const fieldStyles = {
  bg: 'paper',
  borderColor: 'lineStrong',
  borderRadius: '4px',
  _hover: { borderColor: 'ink' },
  _focusVisible: { borderColor: 'ink', boxShadow: '0 0 0 1px var(--chakra-colors-ink)' },
}

// How long the form takes to fade out before the thank-you note appears.
const FADE_MS = 280

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [failed, setFailed] = useState(false)
  // 'form' -> 'leaving' (form fading out) -> 'sent' (thank-you note showing)
  const [phase, setPhase] = useState('form')
  const [sentTo, setSentTo] = useState({ name: '', email: '' })
  const [height, setHeight] = useState(undefined)
  const panel = useRef(null)
  const thanks = useRef(null)

  // Move keyboard and screen reader focus to the note once it replaces the form.
  useEffect(() => {
    if (phase === 'sent') thanks.current?.focus({ preventScroll: true })
  }, [phase])

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsSubmitting(true)
    setFailed(false)
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

      // Hold the form's height so the page does not jump when the note replaces it.
      setHeight(panel.current?.offsetHeight)
      setSentTo({ name: name.trim().split(/\s+/)[0], email: email.trim() })
      setPhase('leaving')
      setTimeout(() => {
        setName('')
        setEmail('')
        setMessage('')
        setPhase('sent')
      }, FADE_MS)
    } catch (error) {
      setFailed(true)
    }
    setIsSubmitting(false)
  }

  const reset = () => {
    setHeight(undefined)
    setPhase('form')
  }

  return (
    <Band id="contact-form">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }}>
        <SectionHeader label="Start a project" title="Tell us what you need built.">
          <Text color="steel" maxW="44ch">
            A few lines is enough. We are based in Cape Town and work with clients anywhere.
          </Text>
        </SectionHeader>

        <Box ref={panel} minH={height ? `${height}px` : undefined}>
          {phase === 'sent' ? (
            <Stack
              ref={thanks}
              tabIndex={-1}
              role="status"
              className="page-enter"
              spacing={5}
              h="100%"
              minH="inherit"
              justify="center"
              align="flex-start"
              bg="paper"
              border="1px solid"
              borderColor="line"
              borderRadius="4px"
              p={{ base: 7, md: 10 }}
              _focusVisible={{ outline: 'none' }}
            >
              <Box color="ink" lineHeight={0}>
                <Mark size={56} />
              </Box>
              <Label>Message sent</Label>
              <Heading as="h3" fontSize={{ base: '1.9rem', md: '2.4rem' }} sx={{ textWrap: 'balance' }}>
                Thank you{sentTo.name ? `, ${sentTo.name}` : ''}.
              </Heading>
              <Text maxW="40ch">
                We have your message and will reply to you at{' '}
                <Box as="span" fontWeight={600} wordBreak="break-word">{sentTo.email}</Box>.
              </Text>
              <Button variant="line" size="sm" onClick={reset}>
                Send another message
              </Button>
            </Stack>
          ) : (
            <Box
              as="form"
              onSubmit={handleSubmit}
              opacity={phase === 'leaving' ? 0 : 1}
              transform={phase === 'leaving' ? 'translateY(-6px)' : 'none'}
              transition={`opacity ${FADE_MS}ms ease-out, transform ${FADE_MS}ms ease-out`}
            >
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
                  <Button type="submit" size="lg" isLoading={isSubmitting || phase === 'leaving'} loadingText="Sending">
                    Send message
                    <Arrow />
                  </Button>
                  {failed && (
                    <Text role="alert" mt={4} pl={3} borderLeft="3px solid" borderColor="brass" fontSize="sm" fontWeight={500}>
                      Your message was not sent. Something went wrong on our side. Please try again in a few minutes.
                    </Text>
                  )}
                  <Text color="steel" fontSize="sm" mt={3}>
                    We use your details only to reply to you. See our{' '}
                    <ChakraLink as={NextLink} href="/privacy" color="ink" textDecoration="underline" textUnderlineOffset="3px">
                      privacy and cookies page
                    </ChakraLink>
                    .
                  </Text>
                </Box>
              </Stack>
            </Box>
          )}
        </Box>
      </SimpleGrid>
    </Band>
  )
}
