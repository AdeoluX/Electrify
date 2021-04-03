const response = (statusCode, data, res) => {
  res.status(statusCode).json(data);
};

module.exports = {
  response,
};
