const fetch = require('node-fetch');

const endpoint = 'http://localhost:3000/users';

const fetchUser = async id => {
  const response = await fetch(`${endpoint}/${id}`);
  return response.json();
};

const createUser = async user => {
  const response = await fetch(`${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' }
  });

  return response.json();
};

module.exports = {
  fetchUser,
  createUser
};
