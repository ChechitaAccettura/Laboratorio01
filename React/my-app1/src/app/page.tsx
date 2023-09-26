'use client';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import Header from '@/components/Header';

export default function Home() {
  return (
          <>
          <Header />

          <Hero />

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <br></br>
          <Footer />
          </>
  );
}
