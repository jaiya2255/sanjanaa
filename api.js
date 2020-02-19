const express = require('express');
const products = require("./src/database/models/product");
const Manufacture=require("./src/database/models/Manufacturing");
const Category=require("./src/database/models/Categories");
const Properties=require("./src/database/models/Properties");
const router =express.Router();

router.get('/',(req, res) => {
    products.findall({
        include: [{model:Manufacture}]
    }) .then(res1 =>{
        res.json(res1);
    });
});
router.post('/',(req, res) => {
if(req.body !=null){
    console.log(req.body);
    let newPdt = {
        name:req.body.name,
        price:req.body.price
    };
   let newmanu=req.body.manufacture;
    products.create(newPdt).then(pdt => {
        Manufacture.findOne({where:{id:newmanu}}).then(resmanu =>{
            pdt.setManufactures(resmanu);
                console.log("saved");
        });
      
        
    });
}
  res.json({status:"executed"});
});
router.post("/manufacture",(req,res)=> {
    if(req.body != null){
        console.log(req.body);
    }
})

module.exports = router;