const express = require('express');
const bodyParser = require('body-parser');
const db = require("./database/connector");
const router = require("../api")

const app = express();
const port = 3000;
app.use(bodyParser.json())
app.use("/",router)


db.authenticate().then(() => {
    console.log("DB authenticate");
    require("./database/schemainilizer");
}).catch((err) => {
     console.error(err);})

app.listen(port, () => { console.log(`Server running on ${port}`)}); //callback

