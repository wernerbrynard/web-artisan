// src/app/page.js
import Hero from '@/components/Hero';
import { WorkSection, RideoutSection } from '@/components/Work';
import { ServicesSection, FounderSection } from '@/components/Services';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkSection />
      <RideoutSection />
      <ServicesSection />
      <FounderSection />
      <ContactForm />
    </main>
  );
}
