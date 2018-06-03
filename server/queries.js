const promise = require('bluebird');

const options = {
  promiseLib: promise,
};

const pgp = require('pg-promise')(options);
// var connectionString = 'postgres://postgres:postgres@database:5432/fec'; //for docker
const connectionString = 'postgres://localhost:5432/fec'; // for local
const db = pgp(connectionString);

const getRoomReviews = function (req, res, next) {
  db.any('SELECT * FROM reviews WHERE room_id = $1', req.params.id)
    .then((data) => {
      res.status(200)
        .json(data);
    })
    .catch(err => next(err));
};

module.exports = {
  getRoomReviews,
};
