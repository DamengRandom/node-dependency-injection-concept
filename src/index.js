'use strict'

const axios = require('axios');
const server = require('./server');
const port = process.env.PORT || 6767;

const app = server(axios);

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`);
});
