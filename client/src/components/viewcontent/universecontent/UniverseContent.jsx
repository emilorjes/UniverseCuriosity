import React from 'react';
import UniverseTextContent from '../../../shared/res/content/UniverseTextContent';

/**
 * Shows content that is used for the planets page.
 * @returns Universe content.
 */
function UniverseContent() {
  return (
    <div className="container">
      <h1>Facts about the universe</h1>
      <div className="content">
        <h2>The Universe</h2>
        <p>{UniverseTextContent.universeShortDescribe}</p>
        <p>{UniverseTextContent.universeAge}</p>
      </div>
      <div className="content">
        <h2>The Big Bang</h2>
        <p>{UniverseTextContent.bigBangShortDescribe}</p>
        <p>{UniverseTextContent.bigBangLongDescribe}</p>
      </div>
      <div className="content">
        <h2>What is a Galaxy?</h2>
        <p>{UniverseTextContent.galaxayShortDescribe}</p>
        <p>{UniverseTextContent.galaxyLongDescribe}</p>
      </div>
    </div>
  );
}

export default UniverseContent;
