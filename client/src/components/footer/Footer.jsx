import React from 'react';
import './Footer.css';

function Footer() {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer>
      <p>© {getCurrentYear()} Universe Curiosity</p>
    </footer>
  );
}

export default Footer;
