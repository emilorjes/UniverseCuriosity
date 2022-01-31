import React from 'react';
import PlanetContent from '../../components/viewcontent/planetcontent/PlanetContent';
import Footer from '../../components/footer/Footer';

/**
 * A view for the Planets page.
 * @returns Planets view.
 */
function PlanetsView() {
  return (
    <>
      <main>
        <PlanetContent />
      </main>
      <Footer />
    </>
  );
}

export default PlanetsView;
