const connection = require('./connection.js');

const printQuestionMarks = (num) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
};

const orm = {
    all(table, cb) {
        const queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },
    create(table, cols, vals, cb) {
        var colString = cols.toString()
        var questionMarks = printQuestionMarks(vals.length)
        let queryString = `INSERT INTO ${table} (${colString}) VALUES (${questionMarks})`;

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            
            cb(result);
        });
    },
    update(table, condition, cb) {

        let queryString = `UPDATE ${table} SET eaten = 1 WHERE ${condition}`;

        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    }
};

module.exports = orm;
