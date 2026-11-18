// src/components/Consent.js
'use client';

import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Box, Button, Container, Flex, Link as ChakraLink, Text } from '@chakra-ui/react';

// The visitor's cookie choice is kept in their own browser under this name.
// Storing the choice itself needs no consent; it is what makes the choice stick.
const STORAGE_KEY = 'wa-cookie-choice';
const OPEN_EVENT = 'wa-cookie-settings';

function readChoice() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveChoice(value) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Private windows can refuse storage. The banner then simply shows again next visit.
  }
}

// Remove Google Analytics cookies that an earlier "accept" may have set.
function clearAnalyticsCookies() {
  const parts = window.location.hostname.split('.');
  const domains = [''];
  for (let i = 0; i < parts.length - 1; i++) {
    domains.push(`.${parts.slice(i).join('.')}`);
  }
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim();
    if (!name.startsWith('_ga')) return;
    domains.forEach((domain) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ''}`;
    });
  });
}

// Reopens the banner so a visitor can change their mind. Used in the footer and the privacy policy.
export function CookieSettingsLink({ children = 'Cookie settings', ...props }) {
  return (
    <ChakraLink as="button" type="button" onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))} textDecoration="underline" textUnderlineOffset="3px" {...props}>
      {children}
    </ChakraLink>
  );
}

// Cookie banner plus Google Analytics. Analytics is not loaded, and sets no cookies,
// until the visitor accepts. Declining is as easy as accepting.
export default function Consent({ gaId }) {
  const [choice, setChoice] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = readChoice();
    setChoice(saved);
    setIsOpen(!saved);
    const open = () => setIsOpen(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  // With no analytics configured there are no cookies to ask about.
  if (!gaId) return null;

  const accept = () => {
    window[`ga-disable-${gaId}`] = false;
    saveChoice('granted');
    setChoice('granted');
    setIsOpen(false);
  };

  const decline = () => {
    window[`ga-disable-${gaId}`] = true;
    clearAnalyticsCookies();
    saveChoice('denied');
    setChoice('denied');
    setIsOpen(false);
  };

  return (
    <>
      {choice === 'granted' && <GoogleAnalytics gaId={gaId} />}

      {isOpen && (
        <Box
          role="region"
          aria-label="Cookie choice"
          position="fixed"
          left={0}
          right={0}
          bottom={0}
          zIndex={1500}
          bg="ink"
          color="stone"
          borderTop="1px solid"
          borderColor="lineOnInk"
        >
          <Container maxW="6xl" py={4}>
            <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'flex-start', md: 'center' }} justify="space-between" gap={4}>
              <Text fontSize="sm" maxW="62ch">
                We use cookies for one thing: Google Analytics, to see how this site is used. None are set unless you accept.{' '}
                <ChakraLink as={NextLink} href="/privacy#cookies" color="stone" textDecoration="underline" textUnderlineOffset="3px">
                  Read more
                </ChakraLink>
              </Text>
              <Flex gap={3} flex="none">
                <Button id="cookie-decline" onClick={decline} variant="line" borderColor="stone" size="sm" px={5}>
                  Decline
                </Button>
                <Button id="cookie-accept" onClick={accept} variant="stone" size="sm" px={5}>
                  Accept
                </Button>
              </Flex>
            </Flex>
          </Container>
        </Box>
      )}
    </>
  );
}
