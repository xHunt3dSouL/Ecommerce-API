const express = require('express');
const PORT = 5000;

//calling file in the index
const productRouter = require('./Route/product')
const homeRouter = require('./Route/home')
const errorRouter = require('./Route/error')

//creating a server
const app = express();

//link the routes file
app.use(homeRouter)
app.use("/api/product", productRouter)
app.use(errorRouter)

app.listen(PORT, () => {
    console.log(`Server Started At Port ${PORT}`)
});

/*
1.Route Params
2.Query Strings
*/

