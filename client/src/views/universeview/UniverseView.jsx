import React from 'react';
import UniverseContent from '../../components/viewcontent/universecontent/UniverseContent';
import Footer from '../../components/footer/Footer';

/**
 * A view for the Universe page.
 * @returns Universe view.
 */
function UniverseView() {
  return (
    <>
      <main>
        <UniverseContent />
      </main>
      <Footer />
    </>
  );
}

export default UniverseView;
