// require .env file
// require('dotenv').config();

// server instantiate
const express = require('express');
const app = express();
const port = 3000;  

// creating multiple routes with multiple http request

// 1. get request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('this is my twitter');
});

app.get('/instagram', (req, res) => {
  // res.json('<h1>instagram user</h1>') // for sending json data
  res.send('<h1>instagram user</h1>')
});

// post request
app.post('/api/cars',(req, res)=>{
  const {name, brand} = request.body;
  console.log(name);
  console.log(brand);
  res.send('Car submitted successfully')
})

// Activate the server on port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
