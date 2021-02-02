const orm = require('../config/orm.js');

const food = {
  all: function(cb) {
    orm.all('foods', (res) => {
        cb(res);
    })
  },
  create: function(cols, vals, cb) {
    orm.create('foods', cols, vals, (res) => {
        cb(res);
    })
  },
  update: function(condition, cb) {
    orm.update('foods', condition, (res) => {
        cb(res);
    })
  }
};

module.exports = food;