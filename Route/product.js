<<<<<<< HEAD
const express = require("express");
const {
  getAllProduct,
  getSingleProduct,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const checkAPIKey = require("../middlewares/auth");

const logger = require("../middlewares/logger");

// Initialize router object
const router = express.Router();

router.get("/", checkAPIKey, getAllProduct);
// GET request for retrieving all products.
// The `checkAPIKey` middleware is applied before `getAllProduct` controller function.

router.get("/:productID", getSingleProduct);
// GET request for retrieving a single product by ID.

router.post("/", createProduct);
// POST request for creating a new product.

router.put("/:productID", replaceProduct);
// PUT request for replacing a product by ID.

router.patch("/:productID", updateProduct);
// PATCH request for updating a product by ID.

router.delete("/:productID", deleteProduct);
// DELETE request for deleting a product by ID.

// Export the router object
module.exports = router;
=======

const express = require('express');
const productData = require('../Data/product.json')


//Initialize router object.
const router = express.Router();

router.get("/", (req, res) => {
    console.log(req.query)
    const { category } = req.query;
    const { minPrice } = req.query;

    //Apply Filter

    if (category && minPrice) {
        const filteredData = productData.filter((element) => {
            return element.category === category && element.price >= minPrice
            //return element.category === category;_
        })
        //res.json(filteredData)
        res.render('index',{data: filteredData})
    }
    else if (category) {
        const filteredData = productData.filter((element) => {
            return element.category === category
        })
        //res.json(filteredData)
        res.render('index',{data : filteredData})

    } else if (minPrice) {
        const filteredData = productData.filter((element) => {
            return element.price >= minPrice
        })
        //res.json(filteredData)
        res.render('index' ,{data: filteredData})
    }
    
    else {
        //res.json(productData)
        res.render('index', {data: productData})
    }
})


router.get("/:productID", (req, res) => {
    console.log(req.params)
    const { productID } = req.params;
    const product = productData.find((product) => product.id === Number(productID))
    // res.json(product ? product : "Index Not Found")
    res.render('details',{data:product})
})

router.post('/', (req, res) => {
    res.send('This api will create a producvt in database')
})

router.put('/:productID', (req, res) => {
    res.send("This api will replace product in database.")
})
router.patch('/:productID', (req, res) => {
    res.send("This api will update product in database.")
})
router.delete('/:productID', (req, res) => {
    res.send("This api will delete product in database.")
})


module.exports = router;
>>>>>>> 414feaa3df7c4c6296cba1f024da5203c48c4408
