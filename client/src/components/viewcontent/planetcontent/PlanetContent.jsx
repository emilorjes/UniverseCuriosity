import React from 'react';
import './PlanetContent.css';
import PlanetCard from '../../cards/planetcard/PlanetCard';

function PlanetContent() {
  return (
    <div className="container">
      <h1>Explore the planets in our solar system</h1>
      <PlanetCard />
    </div>
  );
}

export default PlanetContent;
