import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HeroSection = () => (
  <section id="home" className="hero-section text-center">
    <Container>
      <h2>Welcome to</h2>
      <h1><b>YourLab.in</b></h1>
      <p><i>This is the first task</i></p>
      <p>I am Ayush rajak </p>
      <Button href="#newpage" variant="primary">Explore more</Button>
    </Container>
  </section>
);

export default HeroSection;