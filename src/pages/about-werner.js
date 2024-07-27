// src/pages/about-werner.js
import { Container, Heading, Text, Stack, Box, useColorModeValue } from '@chakra-ui/react';
import ContactForm from '../components/ContactForm';

export default function AboutWernerPage() {
  return (
    <Container maxW={'5xl'} py={12}>
      <Stack spacing={6}>
        <Heading color={'var(--main-color)'} textAlign="center">
          About Werner Brynard
        </Heading>
        <Text color={'var(--text-light-color)'} fontSize={'lg'} textAlign="center">
          Front-End & Full-Stack Developer with 9+ Years of Experience.
        </Text>

        <Box bg={useColorModeValue('gray.50', 'gray.700')} p={8} rounded={'lg'} shadow={'lg'}>
          <Heading size="md" color={'var(--accent-color)'}>Experience</Heading>

          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>Web Artisan &mdash; Founder & Lead Developer</strong><br />
            July 2024 &ndash; Present
          </Text>
          <Text color={'var(--text-light-color)'} fontSize={'lg'}>
            Founded Web Artisan to provide bespoke web solutions. Specialising in building custom websites, applications, and enterprise solutions. I focus on leveraging a wide range of technologies like React, Next.js, and Firebase to deliver robust, scalable solutions. I am flexible in technology choice, ensuring the best fit for each project&apos;s unique requirements.
          </Text>

          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>Maverick Labs &mdash; Software Developer</strong><br />
            March 2015 &ndash; June 2024
          </Text>
          <Text color={'var(--text-light-color)'} fontSize={'lg'}>
            Spearheaded front-end, full-stack, and mobile app development projects using a variety of technologies. Focused on user experience and responsive design in web applications. Developed and maintained various mobile applications, contributing to both frontend and backend functionalities. Collaborated with cross-functional teams to deliver high-quality software solutions.
          </Text>

          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>Peneval Designs &mdash; Owner</strong><br />
            March 2014 &ndash; February 2015
          </Text>
          <Text color={'var(--text-light-color)'} fontSize={'lg'}>
            Managed a freelance web design and development business, specialising in custom HTML and WordPress sites. Delivered tailored web solutions for small businesses, enhancing their online presence and user engagement. Focused on creating user-friendly designs and improving site functionality.
          </Text>
        </Box>

        <Box bg={useColorModeValue('gray.50', 'gray.700')} p={8} rounded={'lg'} shadow={'lg'}>
          <Heading size="md" color={'var(--accent-color)'}>Technologies &amp; Skills</Heading>
          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            I have expertise in a wide range of technologies, ensuring flexibility and adaptability for various project requirements. My primary skills include:
          </Text>
          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>Front-End Development:</strong> React, JavaScript, Next.js, HTML, CSS, UI/UX design, SASS, Chakra UI
          </Text>
          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>Back-End Development:</strong> Node.js, PHP, C#, Express.js
          </Text>
          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>Database Management:</strong> MySQL, SQLite, NoSQL databases (including Firebase)
          </Text>
          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>Mobile Development:</strong> C#, Xamarin, basic Swift (iOS)
          </Text>
          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>Version Control:</strong> Git, GitHub, Bitbucket
          </Text>
          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>Cloud Services &amp; DevOps:</strong> Azure, Google Cloud Platform (GCP), Azure DevOps
          </Text>
          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>API Development:</strong> RESTful APIs, GraphQL, Strapi
          </Text>
          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>Design Tools:</strong> Figma, Adobe XD, Sketch
          </Text>
          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>Testing &amp; Debugging:</strong> Chrome DevTools, Postman
          </Text>
          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>Project Management:</strong> Agile methodologies, Asana, JIRA
          </Text>
        </Box>

        <Box bg={useColorModeValue('gray.50', 'gray.700')} p={8} rounded={'lg'} shadow={'lg'}>
          <Heading size="md" color={'var(--accent-color)'}>Projects</Heading>

          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>Document Verification Hub</strong> &mdash; Led front-end development for a React-based application, facilitating secure document management and user administration. Contributed to both the front-end and API development, ensuring a seamless user experience for staff members.
          </Text>

          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>Nedbank MoneyEdge</strong> &mdash; Developed a Next.js site integrated with Strapi and Microsoft Community Learning Platform for Nedbank. This platform offers courses on financial literacy, allowing users to earn certificates upon completion. Responsible for both front-end and back-end development, creating a cohesive and functional user experience.
          </Text>

          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>Disney Competition for Laughing Cow</strong> &mdash; Created a React-based website for a children&apos;s competition, in collaboration with Disney and Laughing Cow. The site allowed kids to choose Disney characters and win prizes, designed to be engaging and user-friendly.
          </Text>

          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>Klick & Pay</strong> &mdash; Built a cross-platform mobile application using Xamarin for BAT. The app included features for product management and user interactions, demonstrating expertise in mobile and backend development with Firebase as the backend.
          </Text>

          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>DEX</strong> &mdash; Developed using Xamarin for Distell, this mobile application facilitated event management and user engagement. Responsible for both front-end and back-end aspects, utilising Firebase for backend services.
          </Text>

          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>Bumb’Ingomso</strong> &mdash; Developed a mobile app using Xamarin for a non-profit initiative that supported previously disadvantaged women in the Eastern Cape in finding employment. Focused on accessibility features and user support, the app aimed to empower women by providing resources and opportunities for career development.
          </Text>

          <Text color={'var(--text-light-color)'} mt={2} fontSize={'lg'}>
            <strong>USSD-Based Services</strong> &mdash; Developed multiple USSD-based services for clients including DGB, Capitec, and Lewis. These services provided interactive and accessible solutions for users, showcasing versatility in different technological environments.
          </Text>
        </Box>

        <Box mt={10}>
          <ContactForm />
        </Box>
      </Stack>
    </Container>
  );
}