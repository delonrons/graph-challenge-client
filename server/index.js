const express = require('express');
const path = require('path');
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started');
});