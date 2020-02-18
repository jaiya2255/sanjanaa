const db = require("./connector");
const sequelize = require("sequelize")
const product = db.define
(
    "Properties",
    {
        "ID":
        {
            type:sequelize.DOUBLE
        },
        
        "COLOR":
        {
            type:sequelize.STRING
        },
        "WEIGHT":
        {
            type:sequelize.DOUBLE
        },
        "SIZE":
        {
            type:sequelize.STRING
        },
        
       
    }
)