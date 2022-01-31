import React from 'react';
import './AboutContent.css';
import AboutTextContent from '../../../shared/res/content/AboutTextContent';
import { getCurrentYear } from '../../../shared/utils/DateUtils';

function AboutContent() {
  return (
    <div className="container">
      <h1>About Universe Curiosity</h1>
      <div className="content">
        <h2>Universe Curiosity</h2>
        <p>{AboutTextContent.about}</p>
      </div>
      <div className="content">
        <h2>Info and Facts</h2>
        <p>{AboutTextContent.info}</p>
      </div>
      <div className="content">
        <h2>Copyright</h2>
        <p>© {getCurrentYear()} Universe Curiosity</p>
      </div>
    </div>
  );
}

export default AboutContent;
