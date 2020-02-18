const db = require("./connector");
const sequelize = require("sequelize")
const product = db.define
(
    "product",
    {
        "NAME":
        {
            type:sequelize.STRING
        },
        "PRICE":
        {
            type:sequelize.DOUBLE
        },
       
    }
)