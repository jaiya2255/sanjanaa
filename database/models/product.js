const db = require("../connector");
const sequelize = require("sequelize")

module.exports = db.define
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

