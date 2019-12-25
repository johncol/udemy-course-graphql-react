const fetch = require('node-fetch');

const endpoint = 'http://localhost:3000/users';

const fetchUser = async id => {
  const response = await fetch(`${endpoint}/${id}`);
  return response.json();
};

module.exports = {
  fetchUser
};
