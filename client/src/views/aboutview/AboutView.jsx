import React from 'react';
import AboutContent from '../../components/viewcontent/aboutcontent/AboutContent';
import Footer from '../../components/footer/Footer';

/**
 * A view for the About page.
 * @returns About view.
 */
function AboutView() {
  return (
    <>
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}

export default AboutView;
