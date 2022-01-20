/* eslint-disable react/prop-types */
import React from 'react';
import './PlanetModal.css';

function PlanetModal({ planet, closeModal }) {
  const handleClick = () => {
    closeModal(false);
  };

  return (
    <div className="modal-background">
      <div className="modal">
        <button
          type="button"
          className="close-btn"
          onClick={() => handleClick()}
        >
          X
        </button>
        <h2>{planet.name}</h2>
        <h4>{planet.description}</h4>
        <h4>Position from sun: {planet.position}</h4>
        <h4>Number of moons: {planet.moons}</h4>
        <h4>
          {planet.name} is of type: {planet.type}
        </h4>
        <h4>
          The radius of {planet.name}: {planet.radius} km
        </h4>
        <h4>
          Number of earth days to complete one revolution around the sun:{' '}
          {planet.yearLenght}
        </h4>
        <h4>
          The lenght of a day on {planet.name}: {planet.dayLenght} hrs
        </h4>
        <h4>Distance from sun: {planet.distanceFromSun} km</h4>
        <h4>
          Time for light to travel from sun to {planet.name}:{' '}
          {planet.lightFromSunTime} sec
        </h4>
        <h4>Lowest surface temperature: {planet.lowTemperature} °C</h4>
        <h4>Highest surface temperature: {planet.highTemperature} °C</h4>
      </div>
    </div>
  );
}

export default PlanetModal;
