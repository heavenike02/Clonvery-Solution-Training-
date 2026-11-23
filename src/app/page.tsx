import {BookingProvider} from '@/components/booking/BookingContext';
import {Header} from '@/components/sections/Header';
import {Hero} from '@/components/sections/Hero';
import {Courses} from '@/components/sections/Courses';
import {Delivery} from '@/components/sections/Delivery';
import {Faq} from '@/components/sections/Faq';
import {Contact} from '@/components/sections/Contact';
import {Footer} from '@/components/sections/Footer';

export default function Home() {
  return (
    <BookingProvider>
      <Header />
      <main id="top">
        <Hero />
        <Courses />
        <Delivery />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </BookingProvider>
  );
}
