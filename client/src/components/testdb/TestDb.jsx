import { React, useState, useEffect } from 'react';
import PlanetsAPIService from '../../shared/api/service/PlanetsAPIService';

/**
 * A test function that test if the connection between server / database and client works.
 * @returns Info about planets.
 */
function TestDb() {
  const [lisOfPlanets, setListOfPlanets] = useState([]);

  const fetcData = async () => {
    const { data } = await PlanetsAPIService.getAllPlanets();
    setListOfPlanets(data);
  };

  useEffect(() => {
    fetcData();
  }, []);

  return (
    <div>
      {lisOfPlanets.map((planet) => (
        <div>
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
