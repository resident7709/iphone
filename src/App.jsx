import * as Sentry from '@sentry/react';

import Hero from './components/Hero';
import Model from './components/Model';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Features from './components/Features';
import Highlights from './components/Highlights';
import HowItWorks from './components/HowItWorks';

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar /> <Hero /> <Highlights /> <Model /> <Features /> <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
