const express = require("express");

const application = express();

const port = 4000;
application.listen(port, () => {
  console.log(`Application up and running on port ${port}...`);
});
