import { React, useState, useEffect, createContext, useMemo } from 'react';
import PlanetsAPIService from '../api/service/PlanetsAPIService';

export const PlanetsContext = createContext();

/**
 * A PlanetsContext is created with createContext().
 * PlanetsProvider is a provider that fetch the data from the planetsAPI from the server with fetchData() and runs the funtion right before the component renders with useEffect.
 * The hook useMemo is used to memorize listOfPlanets.
 * @returns PlanetsContext provider with the global value "planetsValue"(useMemo) so it can be reached from other components.
 */
// eslint-disable-next-line react/prop-types
function PlanetsProvider({ children }) {
  const [listOfPlanets, setListOfPlanets] = useState([]);

  const planetsValue = useMemo(
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
  }, []);

  return (
    <PlanetsContext.Provider value={planetsValue}>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
