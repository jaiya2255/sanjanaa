const db = require("../connector");
const sequelize = require("sequelize")

module.exports = db.define
(
    "Properties",
    {
        "NAME":
        {
            type:sequelize.STRING
        },
        
        "LOCATION":
        {
            type:sequelize.STRING
        },
         
    }
)


