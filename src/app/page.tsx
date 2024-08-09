import Articles from '@/components/Articles/Articles'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Articles />
      <Footer />
    </>
  );
}
