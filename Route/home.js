const express = require('express');

//Initialize router object
const router = express.Router();

router.get("/", (req, res) => {
    res.send ("Welcome To Ecommerce API");
});


//export
module.exports = router;