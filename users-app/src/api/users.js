const fetch = require('node-fetch');

const endpoint = 'https://jsonplaceholder.typicode.com/users';

const fetchUser = async id => {
  const response = await fetch(`${endpoint}/${id}`);
  return response.json();
};

module.exports = {
  fetchUser
};
