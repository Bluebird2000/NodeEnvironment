import { MongoClient } from "mongodb";
require('dotenv/config');
const connectionString = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
MongoClient.connect(connectionString, (err, db) => {
    if (err) {
        return console.log('unable to establish connection');
    }
    console.log('connection to MongoDB sever was successfull');
    db.close();
});