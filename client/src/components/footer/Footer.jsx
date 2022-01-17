import React from 'react';
import './Footer.css';
import { getCurrentYear } from '../../shared/utils/DateUtils';

function Footer() {
  return (
    <footer>
      <p>© {getCurrentYear()} Universe Curiosity</p>
    </footer>
  );
}

export default Footer;
