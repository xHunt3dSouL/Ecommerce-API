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
