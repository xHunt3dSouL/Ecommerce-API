<<<<<<< HEAD
const express = require("express");
const PORT = 5000;

// Importing routes
const productRouter = require("./Route/product");
const homeRouter = require("./Route/home");
const errorRouter = require("./Route/error");
const cors = require("cors");
const morgan = require("morgan");
const logger = require("./middlewares/logger");

// Creating an Express server
const app = express();

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Custom middleware for logging
app.use(logger);

// Morgan middleware for logging HTTP requests
app.use(morgan("dev"));

// Linking the routes
app.use(homeRouter); // Home route
app.use("/api/product", productRouter); // Product route
app.use(errorRouter); // Error route

// Start the server
app.listen(PORT, () => {
  console.log(`Server Started At Port ${PORT}`);
});
=======
const express = require('express')

const app = express();
const PORT = 5000;

const productRouter = require('./Route/product.js')
const homeRouter = require('./Route/home.js')
const errorRouter = require('./Route/error.js')
const hbs = require('hbs')

//setup view engine
app.set('view engine','hbs')

//setting up partials for hbs
hbs.registerPartials(__dirname + '/views/partials')



//MiddleWare for static files
app.use(express.static(__dirname + '/public'))

//Link the router file
app.use(homeRouter)
app.use('/product', productRouter)

app.get('/product', (req, res) =>{
    res.render('index')
})

app.use(errorRouter)


app.listen(PORT, () => {
    console.log(`Server Started at Port ${PORT}`)

})
>>>>>>> 414feaa3df7c4c6296cba1f024da5203c48c4408
