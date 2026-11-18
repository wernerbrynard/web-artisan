// src/components/Services.js
'use client';

import NextLink from 'next/link';
import { Box, Button, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { Arrow, Band, Label, SectionHeader } from './ui';

const services = [
  { title: 'Websites', text: 'Fast, clear sites that say what you do and bring in enquiries.' },
  { title: 'Online shops', text: 'Products, payments and delivery, set up so you can run the shop yourself.' },
  { title: 'Apps', text: 'iOS, Android and web apps, including everything behind them.' },
  { title: 'Looking after it', text: 'We stay on after launch for hosting, changes and support.' },
];

export function ServicesSection() {
  return (
    <Band id="services">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }}>
        <SectionHeader label="What we do" title="We build it and we look after it." />
        <Box borderTop="1px solid" borderColor="lineStrong">
          {services.map((service) => (
            <SimpleGrid key={service.title} columns={{ base: 1, sm: 2 }} spacing={{ base: 1, sm: 6 }} py={5} borderBottom="1px solid" borderColor="line" templateColumns={{ sm: '11rem 1fr' }}>
              <Heading as="h3" fontSize="1.25rem" fontWeight={600}>
                {service.title}
              </Heading>
              <Text color="steel">{service.text}</Text>
            </SimpleGrid>
          ))}
        </Box>
      </SimpleGrid>
    </Band>
  );
}

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

// Who is behind the studio. Shown on the home page and at the top of About.
// No photo for now: a recent one of Werner goes in the left column when it is ready.
export function FounderSection({ showAboutLink = true }) {
  const years = calculateYears();
  return (
    <Band id="founder">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 12 }}>
        <SectionHeader label="Who is behind it" title="Werner Brynard" />
        <Stack spacing={4} align="flex-start">
          <Text fontSize="lg" maxW="56ch">
            Werner founded Web Artisan Studios and leads every project. He has been building software for more than <span suppressHydrationWarning>{years}</span> years, including work for Distell, BAT and Capitec.
          </Text>
          <Text color="steel" maxW="56ch">
            When you work with the studio you deal with the person writing the code, from the first quote to the changes you ask for a year after launch.
          </Text>
          {showAboutLink && (
            <Button as={NextLink} href="/about" variant="line" mt={2}>
              More about the studio
              <Arrow color="ink" />
            </Button>
          )}
        </Stack>
      </SimpleGrid>
    </Band>
  );
}
