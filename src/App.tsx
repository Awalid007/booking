/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import { Offer, WhyChooseUs, FAQ, Footer, StickyCTA } from './components/Offer';
import BookingForm from './components/BookingForm';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Offer />
        <WhyChooseUs />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
