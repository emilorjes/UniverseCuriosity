import React from 'react';
import PlanetCard from '../../cards/planetcard/PlanetCard';

/**
 * Shows content that is used for the planets page.
 * @returns Planets content.
 */
function PlanetContent() {
  return (
    <div className="container">
      <h1>Explore the planets in our solar system</h1>
      <PlanetCard />
    </div>
  );
}

export default PlanetContent;
