const usersApi = require('./users');
const companiesApi = require('./companies');

module.exports = {
  ...usersApi,
  ...companiesApi
};
