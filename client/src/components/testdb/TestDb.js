import { useState, useEffect } from 'react';
import Axios from 'axios';
const TestDb = () => {
  const [lisOfPlanets, setListOfPlanets] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:4000/api/planet/get').then((response) => {
      setListOfPlanets(response.data);
    });
  });

  return (
    <div>
      {lisOfPlanets.map((planet) => {
        return (
          <div>
            <h1>Name: {planet.name}</h1>
            <p>Position from sun: {planet.position}</p>
            <p>Number of moons: {planet.moons}</p>
            <p>Description: {planet.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TestDb;
