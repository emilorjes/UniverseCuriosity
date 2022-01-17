import http from '../PlanetsAPI';

const getAllPlanets = () => http.get('/get');

export default { getAllPlanets };
