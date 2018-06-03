const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const db = require('./queries.js');

// http://mherman.org/blog/2016/03/13/designing-a-restful-api-with-node-and-postgres/
app.get('/rooms/:id/reviews', db.getRoomReviews);

app.use('/rooms/:id', express.static(path.join(__dirname, '/../public')));

app.listen(3004, () => console.log('App listening on port 3004...'));
