import http from '../PlanetsAPI';

/**
 * Gets all planets with the help of /get endpoint from server side.
 * @returns Endpoint of get all planets.
 */
const getAllPlanets = () => http.get('/getPlanets');

export default { getAllPlanets };
