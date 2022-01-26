import React from 'react';
import './PlanetContent.css';
import PlanetCard from '../../card/planetcard/PlanetCard';

function PlanetContent() {
  return (
    <div>
      <h1 className="heading">Explore the planets in our solar system</h1>
      <PlanetCard />
    </div>
  );
}

export default PlanetContent;
