const connection = require('./connection.js');

const printQuestionMarks = (num) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
};

function objToSql(obj) {
    const arr = [];
    // console.log(Object.keys(obj).length)
    // console.log(Object.keys(obj))
    // console.log(Object.values(obj))

    var key = Object.keys(obj)

    var values = Object.values(obj)

    for (i = 0; i < Object.keys(obj).length; i++) {
        var string = `${key[i]}='${values[i]}'`
        // console.log(string)
        arr.push(string)
    }
    return arr.toString();

}

const orm = {
    all(table, cb) {
        const queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table}`;

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';
        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    update(table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table}`;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;
