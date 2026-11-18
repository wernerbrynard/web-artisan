// src/components/Work.js
'use client';

import Image from 'next/image';
import { Box, Button, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { clients, rideout } from '@/data/work';
import { Arrow, Band, Label, SectionHeader } from './ui';
import { Mark } from './Logo';

// One client. Every card is identical in size and treatment.
function ClientCard({ client }) {
  return (
    <Box
      as="a"
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      data-group
      display="flex"
      flexDirection="column"
      bg="paper"
      color="ink"
      border="1px solid"
      borderColor="line"
      borderRadius="4px"
      overflow="hidden"
      transition="border-color 0.12s"
      _hover={{ borderColor: 'ink', textDecoration: 'none' }}
    >
      <Box position="relative" sx={{ aspectRatio: '16 / 10' }} borderBottom="1px solid" borderColor="line" overflow="hidden" bg="panel">
        <Image
          src={client.image}
          alt={`The ${client.name} website`}
          fill
          sizes="(max-width: 48em) 100vw, (max-width: 62em) 50vw, 33vw"
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
      </Box>
      <Stack spacing={2} p={5} flex="1">
        <Label>{client.kind}</Label>
        <Heading as="h3" fontSize="1.45rem">
          {client.name}
        </Heading>
        <Text color="steel" flex="1">
          {client.built}
        </Text>
        <Text fontWeight={600} fontSize="sm" pt={2}>
          Visit site
          <Box as="span" aria-hidden="true" color="brass" display="inline-block" ml={2} transition="transform 0.12s" _groupHover={{ transform: 'translateX(4px)' }}>
            →
          </Box>
        </Text>
      </Stack>
    </Box>
  );
}

export function WorkSection() {
  return (
    <Band id="work">
      <SectionHeader label="Selected work" title="Some of the brands we build for." mb={10} />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {clients.map((client) => (
          <ClientCard key={client.slug} client={client} />
        ))}

        {/* Fills the rest of the last row: two columns wide on desktop, one on tablet. */}
        <Flex
          gridColumn={{ lg: 'span 2' }}
          position="relative"
          overflow="hidden"
          p={{ base: 6, md: 8 }}
          minH="16rem"
          bg="ink"
          color="stone"
          borderRadius="4px"
          direction="column"
          justify="flex-end"
          align="flex-start"
          gap={5}
        >
          <Box position="absolute" top="-70px" right="-70px" opacity={0.1} pointerEvents="none">
            <Mark size={340} accent="currentColor" />
          </Box>
          <Box position="relative">
            <Heading as="h3" fontSize={{ base: '1.9rem', md: '2.6rem' }}>
              Yours next.
            </Heading>
            <Text color="mist" mt={2}>
              Tell us what you need built.
            </Text>
          </Box>
          <Button as="a" href="#contact-form" variant="stone" size="lg" position="relative">
            Start a project
            <Arrow />
          </Button>
        </Flex>
      </SimpleGrid>
    </Band>
  );
}

// Our own product. The one dark section on the page.
export function RideoutSection() {
  return (
    <Band id="rideout" dark>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }} alignItems="center">
        <Stack spacing={4} align="flex-start">
          <Label color="mist">Our own product</Label>
          <Heading as="h2" fontSize={{ base: '2.4rem', md: '3.6rem' }} letterSpacing="-0.03em">
            {rideout.name}
          </Heading>
          <Text color="mist" maxW="46ch" fontSize="lg">
            An app for adventure motorcyclists, on iOS, Android and the web. It records the whole ride and tells you what it actually was, with a route builder that colours the map by surface and plans group rides around it.
          </Text>
          <Text color="mist" maxW="46ch">
            We designed it, built it and run it ourselves, so we know what it takes to keep a product alive after launch.
          </Text>
          <Button as="a" href={rideout.url} target="_blank" rel="noopener noreferrer" variant="stone" size="lg" mt={2}>
            See Rideout
            <Arrow />
          </Button>
        </Stack>
        <Box position="relative" sx={{ aspectRatio: '16 / 10' }} borderRadius="4px" overflow="hidden" border="1px solid" borderColor="lineOnInk">
          <Image
            src={rideout.image}
            alt="The Rideout website"
            fill
            sizes="(max-width: 48em) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        </Box>
      </SimpleGrid>
    </Band>
  );
}
