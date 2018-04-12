var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/fec';
var db = pgp(connectionString);

var getRoomReviews = function(req, res, next) {
  db.any('SELECT * FROM reviews WHERE room_id = $1', req.params.id)
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Retrieved reviews for room ' + req.params.id
    });
  })
  .catch((err) => {
    return next(err);
  });
  
}

module.exports = {
  getRoomReviews: getRoomReviews
};