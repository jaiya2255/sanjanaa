const Properties= require('./models/Properties')
const Product = require('./models/product')
const Category=require('./models/Categories')
const Manufacture = require('./models/Manufacturing')


const db = require('./connector')

Product.hasOne(Properties)
//Product.hasMany(Properties)
Product.belongsTo(Category)

Product.belongsToMany(Manufacture,{
    through:"Product_Manufacture",
    foreignKey:"PRODUCT_ID",
    otherKey:"MANUFACTURE_ID",
    timestamp:"false"
})


Manufacture.belongsToMany(Product,{
    through:"Product_Manufacture",
    foreignKey:"MANUFACTURE_ID",
    otherKey:"PRODUCT_ID",
    timestamp:"false"
})

db.sync()


