import { React, useContext } from 'react';
import { PlanetsContext } from '../../../shared/provider/PlanetsProvider';
import './PlanetCard.css';

function PlanetCard() {
  const { listOfPlanets } = useContext(PlanetsContext);

  return (
    <div className="cards">
      {listOfPlanets.map((planet) => (
        <div className="card">
          <div key={planet.name}>
            <h2> {planet.name}</h2>
            <img src={planet.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlanetCard;
