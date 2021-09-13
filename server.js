'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = process.env.PORT;


let getBook=require('./Schema')



app.get('/books', getBook);

server.get('*', (req, res) => {
    res.status(404).send('Sorry, page not found');
  })

app.listen(PORT, () => console.log(`listening on ${PORT}`));
