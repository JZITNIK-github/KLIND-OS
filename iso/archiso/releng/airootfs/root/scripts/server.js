const express = require('express');
const path = require('path');
const app = express();
const port = 10000;

const staticDirectory = path.join(__dirname, 'data');

app.use(express.static(staticDirectory));

app.listen(port, '127.0.0.1', () => {
  console.log(`KLIND OS Server is running on port ${port}`);
});
