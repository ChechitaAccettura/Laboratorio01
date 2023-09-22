'use client';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Card from '@/components/Card';

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
