const express = require('express');
const product = require("./database/models/product");
const Manufactures = require("./database/models/Manufacturing");
const Categories = require("./database/models/Categories");
const Properties = require("./database/models/Properties")
const router = express.Router();

router.get("/",(req, res) => {
    Product.findAll({
        include: [{model:Manufactures}]
    }).then(res1 => {
        res.json(res1);
    });
});

router.post("/",(req, res) => {
    if(req.body !==null){
    console.log(req.body);
    let newPdt = {
        NAME: req.body.name,
        PRICE:req.body.price
    };
    let newManu = req.body.Manufactures
    Product.create(newPdt).then(pdt => {
        Manufactures.findone({where: {id :newManu}}).then(res.resManu)
        pdt.setManufacturess(newManu).then(() => {
            console.log("saved");
        })
    });
    }
    res.json({status: "executed"})
});


