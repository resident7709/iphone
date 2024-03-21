import * as Sentry from '@sentry/react';

import Hero from './components/Hero';
import Model from './components/Model';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Highlights from './components/Highlights';

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar /> <Hero /> <Highlights /> <Model /> <Features />
    </main>
  );
};

export default Sentry.withProfiler(App);
