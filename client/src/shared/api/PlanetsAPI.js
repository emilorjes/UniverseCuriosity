import Axios from 'axios';

const PlanetsAPI = Axios.create({
  baseURL: 'http://localhost:4000/api/planet',
});

export default PlanetsAPI;
