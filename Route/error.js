const express = require('express');

//Initialize router object
const router = express.Router();

router.get("*",(req, res) =>
{
    res.setHeader("Content-Type")
    res.send("Page Not Found")
});



//export
module.exports = router;
