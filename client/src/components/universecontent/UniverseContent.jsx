import React from 'react';
import './UniverseContent.css';
import UniverseTextContent from '../../shared/res/content/UniverseTextContent';

function UniverseContent() {
  return (
    <div>
      <div className="container">
        <h2>The Universe</h2>
        <p>{UniverseTextContent.universeShortDescribe}</p>
        <p>{UniverseTextContent.universeAge}</p>
      </div>
      <div className="container">
        <h2>The Big Bang</h2>
        <p>{UniverseTextContent.bigBangShortDescribe}</p>
        <p>{UniverseTextContent.bigBangLongDescribe}</p>
      </div>
      <div className="container">
        <h2>What is a Galaxy?</h2>
        <p>{UniverseTextContent.galaxayShortDescribe}</p>
        <p>{UniverseTextContent.galaxyLongDescribe}</p>
      </div>
    </div>
  );
}

export default UniverseContent;
