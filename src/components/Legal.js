// src/components/Legal.js
'use client';

import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import { Label } from './ui';

// Layout for the privacy policy and terms: a title block, then plain readable text.
// The page content is written as ordinary h2, p, ul and table elements.
export default function LegalPage({ label, title, updated, children }) {
  return (
    <main>
      <Container maxW="6xl" pt={{ base: 14, md: 20 }} pb={{ base: 14, md: 20 }}>
        <Stack spacing={5} mb={{ base: 8, md: 12 }}>
          <Label>{label} · Last updated {updated}</Label>
          <Heading as="h1" fontSize={{ base: '2.6rem', md: '4rem' }} letterSpacing="-0.03em" lineHeight={1}>
            {title}
          </Heading>
        </Stack>
        <Box
          maxW="68ch"
          fontSize="lg"
          sx={{
            '& h2': {
              fontFamily: 'heading',
              fontStretch: '114%',
              fontWeight: 700,
              fontSize: '1.5rem',
              letterSpacing: '-0.015em',
              lineHeight: 1.15,
              mt: 12,
              mb: 3,
              pt: 6,
              borderTop: '1px solid',
              borderColor: 'line',
            },
            '& p': { mb: 4 },
            '& ul': { pl: 5, mb: 4 },
            '& li': { mb: 2 },
            '& a': { textDecoration: 'underline', textUnderlineOffset: '3px' },
            '& .table-wrap': { overflowX: 'auto', mb: 4 },
            '& table': { width: '100%', borderCollapse: 'collapse', fontSize: 'md' },
            '& th, & td': { textAlign: 'left', verticalAlign: 'top', py: 3, pr: 4, borderBottom: '1px solid', borderColor: 'line' },
            '& th': { fontFamily: 'mono', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'steel', fontWeight: 400 },
          }}
        >
          {children}
        </Box>
      </Container>
    </main>
  );
}
