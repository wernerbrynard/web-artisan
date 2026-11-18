"use client";

import { Box, Container, Heading, SimpleGrid, Stack, Text, Link as ChakraLink } from '@chakra-ui/react';
import ContactForm from '../../components/ContactForm';
import { FounderSection } from '../../components/Services';
import { Arrow, Band, Label, SectionHeader } from '../../components/ui';
import { Mark } from '../../components/Logo';
import { studio } from '../../data/work';

const principles = [
  { title: 'One person, start to finish', text: 'No account managers and no hand-offs. The person who quotes the work is the person who builds it.' },
  { title: 'Plain about cost', text: 'Quotes are estimates in hours. We bill for the hours actually worked, and you see them every month.' },
  { title: 'No finish line', text: 'Launch is the start. We keep hosting, changing and supporting what we build for as long as you need it.' },
];

const before = ['Distell', 'BAT', 'Capitec', 'Nedbank', 'Laughing Cow'];

const alsoWith = [
  {
    name: 'Sport Helicopters',
    kind: 'Helicopter flights',
    url: 'https://sporthelicopterscapetown.co.za/',
    text: 'An internal booking platform for their flight logistics. We maintain the system that schedules their active fleet.',
  },
  {
    name: 'Maverick Labs',
    kind: 'Product lab',
    url: 'https://mavericklabs.io/',
    text: 'A product lab we work alongside on large mobile and web projects.',
  },
];

export default function About() {
  return (
    <main>
      <Box as="section" position="relative" overflow="hidden" sx={{ isolation: 'isolate' }}>
        {/* Oversized globe mark, cropped by the edge of the section */}
        <Box position="absolute" zIndex={-1} top="-90px" right="-150px" color="panel" pointerEvents="none" display={{ base: 'none', md: 'block' }}>
          <Mark size={560} />
        </Box>
        <Container maxW="6xl" pt={{ base: 14, md: 24 }} pb={{ base: 12, md: 20 }}>
          <Stack spacing={6}>
            <Label>About · Cape Town · Since {studio.since}</Label>
            <Heading as="h1" fontSize={{ base: '2.6rem', md: '4.4rem' }} letterSpacing="-0.03em" lineHeight={1} maxW={{ md: '75%' }} sx={{ textWrap: 'balance' }}>
              A small studio that builds things properly.
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="56ch">
              Web Artisan Studios builds websites, online shops and apps from Cape Town. Many of our clients work in motorcycling, touring and the outdoors. All of them wanted something built with care and looked after once it was live.
            </Text>
          </Stack>
        </Container>
      </Box>

      <FounderSection showAboutLink={false} />

      <Band dark position="relative" overflow="hidden" sx={{ isolation: 'isolate' }}>
        <Box position="absolute" zIndex={-1} bottom="-190px" right="-110px" opacity={0.08} pointerEvents="none">
          <Mark size={520} accent="currentColor" />
        </Box>
        <SectionHeader label="How we work" title="Three things you can count on." mb={10} dark />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
          {principles.map((item) => (
            <Stack key={item.title} spacing={2} pt={5} borderTop="2px solid" borderColor="brass">
              <Heading as="h3" fontSize="1.25rem" fontWeight={600}>
                {item.title}
              </Heading>
              <Text color="mist">{item.text}</Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Band>

      <Band>
        <SectionHeader label="More of the work" title="Not everything we build has a public page." mb={10} />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }}>
          {alsoWith.map((item) => (
            <Stack key={item.name} spacing={2} pt={5} borderTop="1px solid" borderColor="lineStrong">
              <Label>{item.kind}</Label>
              <Heading as="h3" fontSize="1.45rem">
                {item.name}
              </Heading>
              <Text color="steel" maxW="48ch">{item.text}</Text>
              <ChakraLink href={item.url} isExternal color="ink" fontWeight={600} fontSize="sm" pt={2} _hover={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                Visit site
                <Arrow />
              </ChakraLink>
            </Stack>
          ))}
        </SimpleGrid>
      </Band>

      <Band>
        <SectionHeader label="Before the studio" title="Larger companies Werner has built software for." mb={8} />
        <SimpleGrid columns={{ base: 2, md: 5 }} borderTop="1px solid" borderColor="lineStrong">
          {before.map((name) => (
            <Text key={name} py={5} fontFamily="heading" fontStretch="114%" fontWeight={600} fontSize="lg" color="steel" borderBottom="1px solid" borderColor="line">
              {name}
            </Text>
          ))}
        </SimpleGrid>
      </Band>

      <ContactForm />
    </main>
  );
}
