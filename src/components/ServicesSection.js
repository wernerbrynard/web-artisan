// src/components/ServicesSection.js
'use client';

import {
  Container,
  SimpleGrid,
  Box,
  Heading,
  Text,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaHandshake } from 'react-icons/fa';

const Feature = ({ title, text, icon }) => {
  return (
    <Box
      bg={'var(--background-color)'}
      p={6}
      rounded={'xl'}
      shadow={'lg'}
      border={`1px solid`}
      borderColor={'gray.100'}
      _hover={{ transform: 'translateY(-5px)', shadow: 'xl', borderColor: 'var(--accent-color)' }}
      transition="all 0.2s"
    >
      <Stack spacing={4} align="center" textAlign="center">
        <Box
            p={3}
            bg={'blue.50'}
            color={'var(--main-color)'}
            rounded={'full'}
            mb={2}
        >
             {icon}
        </Box>
        <Heading color={'var(--main-color)'} size={'md'} fontWeight="bold">
          {title}
        </Heading>
        <Text color={'var(--text-light-color)'} fontSize={'md'}>
          {text}
        </Text>
      </Stack>
    </Box>
  );
};

export default function ServicesSection() {
  return (
    <Container maxW={'6xl'} py={16}>
      <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'} mb={12}>
        <Heading color={'var(--main-color)'} fontSize={{ base: '3xl', md: '4xl' }}>
          Our Expertise
        </Heading>
        <Text color={'var(--text-light-color)'} fontSize={'xl'}>
          We deliver end-to-end digital solutions tailored to complex business requirements.
        </Text>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        <Feature
          icon={<Icon as={FaLaptopCode} w={8} h={8} />}
          title={'Web Development'}
          text={
            'Custom, high-performance web applications built with Next.js and React. Scalable, secure, and SEO-optimized.'
          }
        />
        <Feature
          icon={<Icon as={FaMobileAlt} w={8} h={8} />}
          title={'Mobile App Dev'}
          text={
            'Native and cross-platform mobile solutions (iOS & Android) designed for seamless user experiences.'
          }
        />
        <Feature
          icon={<Icon as={FaCloud} w={8} h={8} />}
          title={'Cloud & API'}
          text={
            'Robust backend architecture, API integrations, and cloud infrastructure management (AWS, Azure, Firebase).'
          }
        />
        <Feature
          icon={<Icon as={FaHandshake} w={8} h={8} />}
          title={'Consulting'}
          text={
            'Strategic technical direction, code audits, and digital transformation guidance for your business.'
          }
        />
      </SimpleGrid>
    </Container>
  );
}
