const express = require('express');
const { resolve } = require('path');
const connect = require('./database.js')
const app = express();
const port = 3010;
const route = require('./route.js')

app.use(express.json())

connect();

app.use("/api",route);
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});