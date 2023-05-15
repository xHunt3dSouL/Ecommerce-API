const express = require('express');
const productData = require('../Data/product.json');
//Initialize router object
const router = express.Router();

router.get("/", (req, res) => {
    console.log(req.query)
    const {category,minprice} = req.query;
    // apply filter here
    if(category && minprice){
        const filteredData = productData.filter((element) =>{
            return element.category === category && element.price >= minprice;
    });
    res.json(filteredData)
}else if (category){
    const filteredData = productData.filter((element) =>{
        return element.category === category;
});
res.send(filteredData)
}
    if (minprice) {
    const filteredData = productData.filter((element) =>{
        return element.price >= minprice;
    });
    res.json(filteredData);
    } 
    else{
    res.json(productData)
    }
});

router.get('/:productID', (req, res) => {
    console.log(req.params)
    const { productID } = req.params;
    const product = productData.find((product) => product.id === Number(productID))
    res.json(product ? product : "Index Not Found")
});

//rest api
// /api/product

router.post("/", (req, res) => {
    res.send("The api will create product in db")
});

router.put("/:productID", (req, res) => {
    res.send("The api will replace product in db")
});

router.patch("/:productID", (req, res) => {
    res.send("The api will update product in db")
});

router.delete("/:productID", (req, res) => {
    res.send("The api will delete product in db")
});

//export
module.exports = router;