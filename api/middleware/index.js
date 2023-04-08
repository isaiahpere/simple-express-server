const dogsMessage = (req, res, next) => {
  console.log("I LOVE DOGS");
  return next();
};

module.exports = dogsMessage;
