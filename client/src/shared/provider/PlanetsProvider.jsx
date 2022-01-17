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

  const fetchData = async () => {
    const { data } = await PlanetsAPIService.getAllPlanets();
    setListOfPlanets(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PlanetsContext.Provider value={value}>{children}</PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
