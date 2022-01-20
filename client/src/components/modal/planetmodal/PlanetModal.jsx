/* eslint-disable react/prop-types */
import React from 'react';

function PlanetModal({ planet, trigger }) {
  return trigger ? (
    <div>
      <h2>Name: {planet.name}</h2>
    </div>
  ) : null;
}

export default PlanetModal;
