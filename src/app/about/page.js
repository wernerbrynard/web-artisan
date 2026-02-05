// src/app/about/page.js
"use client";

import { Container, Heading, Text, Stack, Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import ContactForm from '../../components/ContactForm';

const calculateYears = () => {
    const startDate = new Date('2015-03-01');
    const today = new Date();
    let years = today.getFullYear() - startDate.getFullYear();
    const m = today.getMonth() - startDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
        years--;
    }
    return years;
};

export default function About() {
  const yearsExperience = calculateYears();

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
               <Text><strong>Business First:</strong> We don&apos;t just write code; we solve business problems.</Text>
               <Text><strong>Full Cycle:</strong> From initial concept and design to deployment and maintenance.</Text>
             </Stack>
          </Box>
        </SimpleGrid>

        {/* Leadership Section */}
        <Box>
            <Heading size="xl" textAlign="center" mb={10} color={'var(--main-color)'}>Leadership & Experience</Heading>
            <Box bg={useColorModeValue('white', 'gray.800')} p={8} rounded={'xl'} shadow={'xl'} border="1px" borderColor="gray.100">
                <Box textAlign="center" mb={12}>
                        <Heading size="lg" mb={2}>Werner Brynard</Heading>
                        <Text color={'var(--accent-color)'} fontWeight="bold" mb={4}>Founder & Technical Lead</Text>
                        <Text color={'var(--text-light-color)'} fontSize={'lg'} mb={4}>
                            With over {yearsExperience} years of industry experience, Werner leads Web Artisan with a focus on high-quality engineering standards. His background spans fintech, mobile development, and enterprise web solutions.
                        </Text>
                        <Text color={'var(--text-light-color)'} fontSize={'md'}>
                            He has architected and delivered critical software solutions for industry leaders including Distell, BAT, and Capitec. Today, he brings that same enterprise-grade discipline and technical rigor to every client partnership at Web Artisan.
                        </Text>
                </Box>
                
                <Box textAlign="center" pt={10} borderTop="1px" borderColor="gray.100">
                    <Heading size="md" mb={6} color={'var(--text-light-color)'} fontWeight="normal" letterSpacing="wide" textTransform="uppercase" fontSize="sm">
                        Enterprise Engineering Heritage
                    </Heading>
                    <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={8} alignItems="center" opacity={0.6}>
                        <Text fontWeight="bold" fontSize="lg" color="gray.500">DISTELL</Text>
                        <Text fontWeight="bold" fontSize="lg" color="gray.500">BAT</Text>
                        <Text fontWeight="bold" fontSize="lg" color="gray.500">CAPITEC</Text>
                        <Text fontWeight="bold" fontSize="lg" color="gray.500">NEDBANK</Text>
                        <Text fontWeight="bold" fontSize="lg" color="gray.500">LAUGHING COW</Text>
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>

        {/* Selected Client Work */}
        <Box textAlign="left">
            <Stack spacing={2} textAlign="center" mb={10}>
                <Heading size="lg" color={'var(--main-color)'}>Featured Partnerships</Heading>
                <Text color={'var(--text-light-color)'} fontSize={'lg'} maxW="3xl" mx="auto">
                    We partner with ambitious specialized brands to build digital excellence.
                </Text>
            </Stack>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="stretch">
                <Box 
                    bg={useColorModeValue('gray.50', 'gray.700')} 
                    p={8} 
                    rounded={'xl'} 
                    shadow={'md'}
                    border="1px"
                    borderColor="transparent"
                    transition="all 0.2s"
                    _hover={{ shadow: 'lg', borderColor: 'var(--accent-color)', transform: 'translateY(-4px)' }}
                >
                    <Heading size="md" color={'var(--accent-color)'} mb={3}>
                        <a href="https://sporthelicopterscapetown.co.za/" target="_blank" rel="noopener noreferrer">SPORT HELICOPTERS</a>
                    </Heading>
                    <Text color={'var(--text-light-color)'} fontSize={'md'}>
                      Developed a specialized internal booking platform to streamline their flight logistics. We maintain the infrastructure that manages their active fleet scheduling and operations.
                    </Text>
                </Box>
                
                <Box 
                    bg={useColorModeValue('gray.50', 'gray.700')} 
                    p={8} 
                    rounded={'xl'} 
                    shadow={'md'}
                    border="1px"
                    borderColor="transparent"
                    transition="all 0.2s"
                    _hover={{ shadow: 'lg', borderColor: 'var(--accent-color)', transform: 'translateY(-4px)' }}
                >
                    <Heading size="md" color={'var(--accent-color)'} mb={3}>
                        <a href="https://xplrsouthafrica.co.za/" target="_blank" rel="noopener noreferrer">XPLR SOUTH AFRICA</a>
                    </Heading>
                    <Text color={'var(--text-light-color)'} fontSize={'md'}>
                      Architected a content-first platform for a travel documentary series. Optimized for video delivery and user retention, serving as the central hub for a growing community of adventure riders.
                    </Text>
                </Box>

                <Box 
                    bg={useColorModeValue('gray.50', 'gray.700')} 
                    p={8} 
                    rounded={'xl'} 
                    shadow={'md'}
                    border="1px"
                    borderColor="transparent"
                    transition="all 0.2s"
                    _hover={{ shadow: 'lg', borderColor: 'var(--accent-color)', transform: 'translateY(-4px)' }}
                >
                    <Heading size="md" color={'var(--accent-color)'} mb={3}>
                        <a href="https://miragearco.com/" target="_blank" rel="noopener noreferrer">MIRA GEAR</a>
                    </Heading>
                    <Text color={'var(--text-light-color)'} fontSize={'md'}>
                      Developed a brand-centric e-commerce showcase for technical riding gear. The site emphasizes product quality through high-fidelity imagery and a custom sizing guide.
                    </Text>
                </Box>

                <Box 
                    bg={useColorModeValue('gray.50', 'gray.700')} 
                    p={8} 
                    rounded={'xl'} 
                    shadow={'md'}
                    border="1px"
                    borderColor="transparent"
                    transition="all 0.2s"
                    _hover={{ shadow: 'lg', borderColor: 'var(--accent-color)', transform: 'translateY(-4px)' }}
                >
                    <Heading size="md" color={'var(--accent-color)'} mb={3}>
                         <a href="https://mavericklabs.io/" target="_blank" rel="noopener noreferrer">MAVERICK LABS</a>
                    </Heading>
                    <Text color={'var(--text-light-color)'} fontSize={'md'}>
                        A strategic partner and product lab. We work alongside their team to deliver technical excellence for large-scale mobile and web initiatives.
                    </Text>
                </Box>
                
                <Box 
                    bg={useColorModeValue('gray.50', 'gray.700')} 
                    p={8} 
                    rounded={'xl'} 
                    shadow={'md'}
                    border="1px"
                    borderColor="transparent"
                    transition="all 0.2s"
                    _hover={{ shadow: 'lg', borderColor: 'var(--accent-color)', transform: 'translateY(-4px)' }}
                >
                    <Heading size="md" color={'var(--accent-color)'} mb={3}>
                        <a href="https://sarahkashyap.com/" target="_blank" rel="noopener noreferrer">SARAH KASHYAP</a>
                    </Heading>
                    <Text color={'var(--text-light-color)'} fontSize={'md'}>
                       Built a high-impact personal brand website for India&apos;s leading female rally racer. The site serves as a professional portfolio for sponsorship acquisition and media relations.
                    </Text>
                </Box>

                <Box 
                    bg={useColorModeValue('gray.50', 'gray.700')} 
                    p={8} 
                    rounded={'xl'} 
                    shadow={'md'}
                    border="1px"
                    borderColor="transparent"
                    transition="all 0.2s"
                    _hover={{ shadow: 'lg', borderColor: 'var(--accent-color)', transform: 'translateY(-4px)' }}
                >
                    <Heading size="md" color={'var(--accent-color)'} mb={3}>
                        <a href="https://rideout.co.za/" target="_blank" rel="noopener noreferrer">RIDEOUT</a>
                    </Heading>
                    <Text color={'var(--text-light-color)'} fontSize={'md'}>
                       Our proprietary ride planning platform. Designed to solve group logistics, it allows riders to create routes, manage public or private events, and coordinate seamlessly.
                    </Text>
                </Box>
            </SimpleGrid>
        </Box>
        
        <Box mt={10}>
          <ContactForm />
        </Box>
      </Stack>
    </Container>
  );
}
