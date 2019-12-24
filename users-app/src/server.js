const express = require('express');
const expressGraphQL = require('express-graphql');

const application = express();
application.use('/graphql', expressGraphQL({ graphiql: true }));

const port = 4000;
application.listen(port, () => {
  console.log(`Application up and running on http://localhost:${port}/`);
});
