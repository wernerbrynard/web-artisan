// src/app/about/page.js
"use client";

import { Container, Heading, Text, Stack, Box, SimpleGrid, useColorModeValue, Image } from '@chakra-ui/react';
import ContactForm from '../../components/ContactForm';

export default function About() {
  return (
    <Container maxW={'6xl'} py={12}>
      <Stack spacing={12}>
        {/* Company Section */}
        <Stack spacing={6} textAlign="center">
          <Heading color={'var(--main-color)'} as="h1" size="2xl">
            About Web Artisan
          </Heading>
          <Text color={'var(--text-light-color)'} fontSize={'xl'} maxW="3xl" mx="auto">
            We are a digital product agency based in Cape Town, built on the belief that great code and great design must work in harmony.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Box>
             <Heading size="lg" mb={4} color={'var(--main-color)'}>Our Mission</Heading>
             <Text color={'var(--text-light-color)'} fontSize={'lg'} mb={4}>
               To empower businesses with digital tools that are not just functional, but exceptional. We bridge the gap between complex technical requirements and intuitive user experiences.
             </Text>
             <Text color={'var(--text-light-color)'} fontSize={'lg'}>
               Whether partnering with startups or established enterprises, we bring a level of craftsmanship to software development that ensures scalability, performance, and longevity.
             </Text>
          </Box>
          <Box bg={useColorModeValue('gray.50', 'gray.700')} p={8} rounded={'lg'} shadow={'lg'}>
             <Heading size="md" mb={4} color={'var(--accent-color)'}>What Sets Us Apart</Heading>
             <Stack spacing={3}>
               <Text><strong>Technical Excellence:</strong> Deep expertise in modern stacks like React, Next.js, and Cloud Infrastructure.</Text>
               <Text><strong>Business First:</strong> We don't just write code; we solve business problems.</Text>
               <Text><strong>Full Cycle:</strong> From initial concept and design to deployment and maintenance.</Text>
             </Stack>
          </Box>
        </SimpleGrid>

        {/* Leadership Section */}
        <Box>
            <Heading size="xl" textAlign="center" mb={10} color={'var(--main-color)'}>Leadership</Heading>
            <Box bg={useColorModeValue('white', 'gray.800')} p={8} rounded={'xl'} shadow={'xl'} border="1px" borderColor="gray.100">
                <Box textAlign="center">
                        <Heading size="lg" mb={2}>Werner Brynard</Heading>
                        <Text color={'var(--accent-color)'} fontWeight="bold" mb={4}>Founder & Technical Lead</Text>
                        <Text color={'var(--text-light-color)'} fontSize={'lg'} mb={4}>
                            With over 9 years of industry experience, Werner leads Web Artisan with a focus on high-quality engineering standards. His background spans fintech, mobile development, and enterprise web solutions.
                        </Text>
                        <Text color={'var(--text-light-color)'} fontSize={'md'}>
                            He has architected and delivered critical software solutions for industry leaders including Distell, BAT, and Capitec. Today, he brings that same enterprise-grade discipline and technical rigor to every client partnership at Web Artisan.
                        </Text>
                </Box>
            </Box>
        </Box>

        {/* Selected Brands / Experience Section */}
        <Box textAlign="center">
            <Heading size="lg" mb={8} color={'var(--text-light-color)'} fontWeight="normal">Trusted experience delivering for major brands</Heading>
            <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={8} alignItems="center" opacity={0.7}>
                <Text fontWeight="bold" fontSize="xl" color="gray.500">MIRA</Text>
                <Text fontWeight="bold" fontSize="xl" color="gray.500">SARAH KASHYAP</Text>
                <Text fontWeight="bold" fontSize="xl" color="gray.500">DISTELL</Text>
                <Text fontWeight="bold" fontSize="xl" color="gray.500">BAT</Text>
                <Text fontWeight="bold" fontSize="xl" color="gray.500">CAPITEC</Text>
                {/* <Text fontWeight="bold" fontSize="xl" color="gray.500">DISNEY</Text> */}
                <Text fontWeight="bold" fontSize="xl" color="gray.500">NEDBANK</Text>
                <Text fontWeight="bold" fontSize="xl" color="gray.500">LAUGHING COW</Text>
            </SimpleGrid>
        </Box>

        {/* Featured Projects Section */}
        <Box bg={useColorModeValue('gray.50', 'gray.700')} p={8} rounded={'lg'} shadow={'lg'}>
          <Heading size="md" color={'var(--accent-color)'} mb={6}>Featured Experience</Heading>

          <Stack spacing={6}>
            <Box>
                <Text fontWeight="bold" fontSize="lg" color={'var(--main-color)'}>Laughing Cow Campaign</Text>
                <Text color={'var(--text-light-color)'} fontSize={'md'}>
                  Created a React-based engagement platform for a children&apos;s competition. The interactive site allowed users to select characters and enter draws, focusing on high engagement and simple, fun UI.
                </Text>
            </Box>

            <Box>
                <Text fontWeight="bold" fontSize="lg" color={'var(--main-color)'}>Nedbank MoneyEdge</Text>
                <Text color={'var(--text-light-color)'} fontSize={'md'}>
                  Developed a Next.js platform integrating with Strapi and Microsoft Community Learning to offer financial literacy courses.
                </Text>
            </Box>

            <Box>
                <Text fontWeight="bold" fontSize="lg" color={'var(--main-color)'}>Klick & Pay (BAT)</Text>
                 <Text color={'var(--text-light-color)'} fontSize={'md'}>
                  Built a cross-platform mobile application for product management and user interactions using Xamarin.
                </Text>
            </Box>

             <Box>
                <Text fontWeight="bold" fontSize="lg" color={'var(--main-color)'}>DEX (Distell)</Text>
                <Text color={'var(--text-light-color)'} fontSize={'md'}>
                   Facilitated event management and user engagement through a custom mobile application.
                </Text>
            </Box>
          </Stack>
        </Box>
        
        <Box mt={10}>
          <ContactForm />
        </Box>
      </Stack>
    </Container>
  );
}
