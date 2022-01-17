import { React, useState, useEffect, createContext, useMemo } from 'react';
import PlanetsAPIService from '../api/service/PlanetsAPIService';

export const PlanetsContext = createContext();

// eslint-disable-next-line react/prop-types
export function PlanetsProvider({ children }) {
  const [listOfPlanets, setListOfPlanets] = useState([]);

  const value = useMemo(
    () => ({
      listOfPlanets,
      setListOfPlanets,
    }),
    [listOfPlanets]
  );

  const fetchPlanets = async () => {
    try {
      const { data } = await PlanetsAPIService.getAllPlanets();
      setListOfPlanets(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPlanets();
    // eslint-disable-next-line no-console
    console.log('Planetdata fetch');
  }, []);

  return (
    <PlanetsContext.Provider value={value}>{children}</PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
