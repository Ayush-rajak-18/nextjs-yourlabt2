import Head from 'next/head';
import Header from '../components/Header';

export default function NewPage() {
  return (
    <>
      <Head>
        <title>New Page - YourLab.in</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      </Head>
      <Header />
      <section id="newpage" className="hero-section text-center">
        <div className="container">
          <h1>Thank you</h1>
          <p>More content goes here...</p>
        </div>
      </section>
    </>
  );
}