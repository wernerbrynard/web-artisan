import { Button } from '@chakra-ui/react';

export default function ScrollToContactButton() {
  const handleScroll = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button
      colorScheme={'accent-color'}
      bg={'var(--accent-color)'}
      rounded={'full'}
      px={6}
      _hover={{
        bg: 'var(--button-hover-color)',
      }}
      onClick={handleScroll}
    >
      Get Started
    </Button>
  );
}