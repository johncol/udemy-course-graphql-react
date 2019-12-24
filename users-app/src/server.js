const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const application = express();
application.use('/graphql', expressGraphQL({ graphiql: true, schema }));

const port = 4000;
application.listen(port, () => {
  console.log(`Application up and running on http://localhost:${port}/`);
});
