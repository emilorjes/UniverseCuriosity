import { React, useContext } from 'react';
import { PlanetsContext } from '../../shared/provider/PlanetsProvider';

/**
 * A test function that test if the connection between server / database and client works.
 * @returns Info about planets.
 */
function TestDb() {
  const { listOfPlanets } = useContext(PlanetsContext);

  return (
    <div>
      {listOfPlanets.map((planet) => (
        <div key={planet.name}>
          <h2>Name: {planet.name}</h2>
          <p>Position from sun: {planet.position}</p>
          <p>Number of moons: {planet.moons}</p>
          <p>Description: {planet.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TestDb;
