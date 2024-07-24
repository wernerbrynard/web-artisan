'use client'

import {
  Container,
  SimpleGrid,
  Box,
  Heading,
  Text,
  Stack,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'
// import ScrollToContactButton from './ScrollToContactButton';

export default function Pricing() {
  return (
    <Container maxW={'5xl'} py={12}>
      <Heading color={'var(--main-color)'} mb={6} textAlign={'center'}>
        Pricing
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box
          bg={'var(--background-color)'}
          p={6}
          rounded={'md'}
          shadow={'lg'}
          border={`1px solid var(--main-color-dark)`}
        >
          <Stack spacing={4}>
            <Heading color={'var(--main-color)'} size={'lg'}>
              Initial Consultation
            </Heading>
            <Text color={'var(--text-light-color)'} fontSize={'lg'}>
              Free
            </Text>
            <Text color={'var(--text-light-color)'} fontSize={'md'}>
              Build rapport, understand your needs, and outline how we can assist with your project.
            </Text>
          </Stack>
        </Box>
        <Box
          bg={'var(--background-color)'}
          p={6}
          rounded={'md'}
          shadow={'lg'}
          border={`1px solid var(--main-color-dark)`}
        >
          <Stack spacing={4}>
            <Heading color={'var(--main-color)'} size={'lg'}>
              Follow-Up Consultations
            </Heading>
            <Text color={'var(--text-light-color)'} fontSize={'lg'}>
              R1200 per hour
            </Text>
            <Text color={'var(--text-light-color)'} fontSize={'md'}>
              Charged for additional project planning, detailed consultations, or strategy sessions beyond the initial consultation.
            </Text>
          </Stack>
        </Box>
        <Box
          bg={'var(--background-color)'}
          p={6}
          rounded={'md'}
          shadow={'lg'}
          border={`1px solid var(--main-color-dark)`}
        >
          <Stack spacing={4}>
            <Heading color={'var(--main-color)'} size={'lg'}>
              Project Work
            </Heading>
            <Text color={'var(--text-light-color)'} fontSize={'lg'}>
              R1200 per hour
            </Text>
            <Text color={'var(--text-light-color)'} fontSize={'md'}>
              Applied to all development and implementation work. Estimated hours will be communicated.
            </Text>
          </Stack>
        </Box>
        <Box
          bg={'var(--background-color)'}
          p={6}
          rounded={'md'}
          shadow={'lg'}
          border={`1px solid var(--main-color-dark)`}
        >
          <Stack spacing={4}>
            <Heading color={'var(--main-color)'} size={'lg'}>
              Retainers
            </Heading>
            <Text color={'var(--text-light-color)'} fontSize={'lg'}>
              Custom Packages
            </Text>
            <Text color={'var(--text-light-color)'} fontSize={'md'}>
              Option for ongoing support with a minimum number of hours at a discounted rate. Contact us for more details.
            </Text>
          </Stack>
        </Box>
      </SimpleGrid>
      {/* <ScrollToContactButton /> */}
    </Container>
  )
}