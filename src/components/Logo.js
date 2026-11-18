// src/components/Logo.js
'use client';

import { useId } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const TILT = 'rotate(-14 60 60)';

// The small mark: the old logo's three bars cut through a solid, tilted globe,
// with one line of longitude so it reads as the classic web globe.
// Inherits its colour from the surrounding text; the middle bar is brass.
export function Mark({ size = 40, accent = 'var(--chakra-colors-brass)', title, ...props }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      <defs>
        <clipPath id={`${id}c`}>
          <circle cx="60" cy="60" r="55" />
        </clipPath>
        <mask id={`${id}m`}>
          <circle cx="60" cy="60" r="55" fill="#fff" />
          <g transform={TILT}>
            <rect x="-10" y="33" width="140" height="9" fill="#000" />
            <rect x="-10" y="55.5" width="140" height="9" fill="#000" />
            <rect x="-10" y="78" width="140" height="9" fill="#000" />
            <ellipse cx="60" cy="60" rx="24" ry="57" fill="none" stroke="#000" strokeWidth="6" />
          </g>
        </mask>
      </defs>
      <circle cx="60" cy="60" r="55" fill="currentColor" mask={`url(#${id}m)`} />
      <g clipPath={`url(#${id}c)`}>
        <rect x="-10" y="55.5" width="140" height="9" fill={accent} transform={TILT} />
      </g>
    </svg>
  );
}

// The full logo: a maker's stamp with the studio name around the mark.
// The ring text is unreadable below about 60px, so use Mark for small sizes.
// `spin` turns the ring text slowly, for when the stamp is used large as a graphic.
export function Stamp({ size = 112, spin = false, ...props }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      role="img"
      aria-label="Web Artisan Studios, Cape Town"
      {...props}
    >
      <defs>
        <path id={`${id}r`} d="M14.5 60 A45.5 45.5 0 1 1 105.5 60 A45.5 45.5 0 1 1 14.5 60" />
      </defs>
      <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text
        className={spin ? 'stamp-spin' : undefined}
        fill="currentColor"
        style={{ fontFamily: 'var(--font-plex-mono), ui-monospace, Menlo, monospace', fontSize: '9.5px', fontWeight: 500 }}
      >
        <textPath href={`#${id}r`} textLength="280" lengthAdjust="spacing">
          WEB ARTISAN STUDIOS · CAPE TOWN ·
        </textPath>
      </text>
      <Mark size={78.5} x="20.75" y="20.75" />
    </svg>
  );
}

// Mark plus wordmark, for the site header.
export function Lockup({ size = 38 }) {
  return (
    <Flex align="center" gap={3}>
      <Mark size={size} />
      <Box lineHeight={1}>
        <Text as="span" display="block" fontFamily="heading" fontWeight={700} fontStretch="118%" fontSize="19px" letterSpacing="-0.01em">
          Web Artisan
        </Text>
        <Text as="span" display="block" mt="5px" fontFamily="mono" fontSize="10px" letterSpacing="0.34em" textTransform="uppercase" color="steel">
          Studios
        </Text>
      </Box>
    </Flex>
  );
}
