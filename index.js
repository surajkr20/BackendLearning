require('dotenv').config();
const express = require('express');

const app = express();
const port = 3000;  

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// practise code

app.get('/twitter', (req, res) => {
  res.send('this is my twitter');
});

app.get('/instagram', (req, res) => {
  // res.json('<h1>instagram user</h1>') // for sending json data
  res.send('<h1>instagram user</h1>')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
