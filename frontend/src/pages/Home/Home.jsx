import React from 'react';
import { Hero } from '../../components/Hero/Hero';
import { Albums } from '../../components/Albums/Albums';
import { Studio } from '../../components/Studio/Studio';
import { StudioFeatures } from '../../components/StudioFeatures/StudioFeatures';

export const Home = () => {
  return (
    <section className="home">
      <Hero />
      <Albums />
      <Studio />
      <StudioFeatures />
    </section>
  );
};
