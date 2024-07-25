// src/app/page.js
import { Box } from '@chakra-ui/react';
import Hero from '../components/Hero'; // Adjust the path if necessary
import AboutMe from '@/components/AboutMe';
import NavBar from '@/components/NavBar';
import Pricing from '@/components/Pricing';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <AboutMe />
      <Pricing />
      <ContactForm />
    </main>
  );
}