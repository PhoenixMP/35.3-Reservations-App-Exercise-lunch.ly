/** Database setup for lunchly */

const { Client } = require("pg");

let DB_URI = {
    user: 'phoen',
    host: 'localhost',
    database: '',
    port: 5432,
    password: 'myPassword'
}






if (process.env.NODE_ENV === "test") {
    DB_URI.database = "lunchly_test";
} else {
    DB_URI.database = "lunchly";
}

process.env.DataBase_Password = "imKr1ne?"

let db = new Client(DB_URI);



db.connect();

module.exports = db;
