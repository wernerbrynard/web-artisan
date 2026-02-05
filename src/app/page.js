// src/app/page.js
import { Box } from '@chakra-ui/react';
import Hero from '../components/Hero'; // Adjust the path if necessary
import AboutUs from '@/components/AboutUs';
import NavBar from '@/components/NavBar';
import ServicesSection from '@/components/ServicesSection';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <ServicesSection />
      <ContactForm />
    </main>
  );
}