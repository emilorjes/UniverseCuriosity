import Axios from 'axios';

/**
 * Creates baseURL for planet API.
 */
const PlanetsAPI = Axios.create({
  baseURL: 'http://localhost:4000/api/planet',
});

export default PlanetsAPI;
