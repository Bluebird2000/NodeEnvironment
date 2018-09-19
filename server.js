import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.get('/', (req, res) => {
    res.send('welcome').status(200);
});
app.listen(process.env.PORT, () => console.log(`Application now listening on port ${process.env.PORT}`));
module.exports.app = app;