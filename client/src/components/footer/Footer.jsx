import React from 'react';
import { getCurrentYear } from '../../shared/utils/DateUtils';

/**
 * Footer that uses the getCurrentYear method to get the current year and shows copyright and name.
 * @returns Copyright, Current year, Name.
 */
function Footer() {
  return (
    <footer>
      <p>© {getCurrentYear()} Universe Curiosity</p>
    </footer>
  );
}

export default Footer;
