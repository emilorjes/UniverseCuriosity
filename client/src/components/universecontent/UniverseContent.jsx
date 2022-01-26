import React from 'react';
import './UniverseContent.css';
import {
  universeShortDescribe,
  universeAge,
  bigBangShortDescribe,
  bigBangLongDescribe,
  galaxayShortDescribe,
  galaxyLongDescribe,
} from '../../shared/res/content/UniverseTextContent';

function UniverseContent() {
  return (
    <div>
      <div className="container">
        <h2>The Universe</h2>
        <p>{universeShortDescribe}</p>
        <p>{universeAge}</p>
      </div>
      <div className="container">
        <h2>The Big Bang</h2>
        <p>{bigBangShortDescribe}</p>
        <p>{bigBangLongDescribe}</p>
      </div>
      <div className="container">
        <h2>What is a Galaxy?</h2>
        <p>{galaxayShortDescribe}</p>
        <p>{galaxyLongDescribe}</p>
      </div>
    </div>
  );
}

export default UniverseContent;
