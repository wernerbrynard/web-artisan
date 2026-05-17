// src/components/ScrollToButton.js
'use client';

import { Button } from '@chakra-ui/react';

export default function ScrollToButton({ targetId, children, ...props }) {
  const handleScroll = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button onClick={handleScroll} {...props}>
      {children}
    </Button>
  );
}
