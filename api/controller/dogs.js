// Dogs controller - logic for dogs endpoint

// creats a single doggy
const createSingleDog = (req, res) => {
  res.send("created a new dog");
};

// fetched all the doggies
const fetchAllDogs = (req, res) => {
  res.send("You fetched all dogs");
};

const fetchSingleDog = (req, res) => {
  const { id } = req.params;
  res.send(`you fetched dog with id ${id}`);
};

const updateSingleDog = (req, res) => {
  const { id } = req.params;
  res.send(`UPDATED dog with id ${id}`);
};

module.exports = {
  createSingleDog,
  fetchAllDogs,
  fetchSingleDog,
  updateSingleDog,
};
