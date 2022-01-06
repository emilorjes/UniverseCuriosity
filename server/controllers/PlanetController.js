const getPlanet = (req, res) => {
  res.send('IT WORKS');
};

const createPlanet = (req, res) => {
  res.send('POST CREATION');
};

module.exports = { getPlanet, createPlanet };
