import Axios from 'axios';

/**
 * Creates baseURL for planet API.
 */
const PlanetsAPI = Axios.create({
  baseURL: 'https://universe-curiosity.herokuapp.com/api/planet',
});

export default PlanetsAPI;
