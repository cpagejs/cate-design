const path = require('path');
const express = require('express');
const app = express();

app.use('/', express.static(path.join(__dirname, './dist')));

app.listen(3001, function () {
  console.log('http://localhost:3001');
});
