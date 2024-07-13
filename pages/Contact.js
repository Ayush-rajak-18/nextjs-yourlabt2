import Head from 'next/head';
import Header from '../components/Header';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - YourLab.in</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      </Head>
      <Header />
      <section id="contact" className="section bg-light text-center">
        <div className="container">
          <h2>Contact Us</h2>
          <p>If you have any questions, contact us.</p>
        </div>
      </section>
    </>
  );
}
