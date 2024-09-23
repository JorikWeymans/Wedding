import { React, useEffect, useState } from 'react';

import './App.css'
import "./styles.css";



import { Hero, Countdown, OurStory, PracticalInformation, CallToAction, Footer } from '@sections/sections';

import ScrollAnimationService from './components/Services/ScrollAnimationService';
import TabSelectionService from './components/Services/TabSelectionService';

import { languageSS } from '@staticServices/LanguageStaticService';
import { preloadAllImages } from '@staticServices/PreloadedImagesStaticService';

import { Header } from './components/sections/Sections.jsx'


function App()
{
  const [storyNeedsUpdate, setStoryNeedsUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // New state for loading

  useEffect(() =>
  {
    setIsLoading(true);
    Promise.all([
      preloadAllImages(),
      languageSS.initialize()
    ]).then(() =>
    {
      // Once both promises have resolved, set loading to false
      setIsLoading(false);
      setStoryNeedsUpdate(true);
    });
  }, []);

  useEffect(() =>
  {
    if (storyNeedsUpdate) {
      const timeout = setTimeout(() =>
      {
        setStoryNeedsUpdate(false); // Reset state after triggering re-render
      }, 100);

      return () => clearTimeout(timeout); // Cleanup
    }
  }, [storyNeedsUpdate]);

  if (isLoading) {
    // You can render a loading spinner or some placeholder here
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-neutral-light1">
        <div className="w-[60px] h-[60px] animate-spin rounded-[50%] border-t-accent-primary border-8 border-solid border-neutral-light2"></div>
      </div>
    )
  }
  return (
    <div className="font-default font-[400] text-lg bg-gray-50">
      <Header />
      <Hero />
      <Countdown />
      <OurStory />
      <PracticalInformation />
      <CallToAction />

      <Footer />

      {/* <WorkInProgress /> */}

      {/* Services */}
      <ScrollAnimationService />
      <TabSelectionService />

    </div>
  );
}

export default App;