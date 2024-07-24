import { Box } from '@chakra-ui/react';
import Hero from '../components/Hero'; // Adjust the path if necessary
import AboutMe from '@/components/AboutMe';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
    </main>
  );
}