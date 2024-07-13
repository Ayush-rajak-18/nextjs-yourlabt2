import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>YourLab</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      </Head>
      <Header />
      <HeroSection />
      <AboutSection />
 
    </>
  );
}
