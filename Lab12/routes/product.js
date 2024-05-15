const express=require('express');
const path=require('path')

const router=express.Router();
let products=[
    { "itemName": "T-Shirt", "itemPrice": 19.99, "itemCategory": "Clothing" },
    { "itemName": "Coffee Mug", "itemPrice": 7.50, "itemCategory": "Kitchenware" },
    { "itemName": "#12345 (pencil)", "itemPrice": 0.25, "itemCategory": "Office Supplies" }
  ];
  

router.get('',(req,res,next)=>{
    res.sendFile((path.join(__dirname,'..','views','products.html')));
});
router.post('',express.urlencoded({ extended: true }),(req,res,next)=>{
    products.push(req.body);
    console.log("Product added to list. Products in list now:");
    console.log(products);
    res.sendFile((path.join(__dirname,'..','views','products.html')));
});

module.exports=router;
