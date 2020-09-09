const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse requests for content-type json
app.use(bodyParser.json());


// pasre request untuk 
// content-type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// setup router untuk produk
require('./app/routers/produk.router')(app);

app.listen(3000, () => {
  console.log('Server berjalan di port 3000');
});

