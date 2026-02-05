// src/app/page.js
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
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