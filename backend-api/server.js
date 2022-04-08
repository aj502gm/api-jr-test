var express = require('express');
var app = express();
const PORT = process.env.PORT || 5050
const { getProducts } = require('./DataModels/Products/getProducts')
const { getOrders } = require('./DataModels/Orders/getOrders');
const { getClients } = require('./DataModels/Clients/getClients');

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();    
})

app.get('/products', getProducts);
app.get('/orders', getOrders);
app.get('/clients', getClients);

app.get('/', (req, res) => {
res.send('This is my demo project')
})

app.listen(PORT, function () {
console.log(`Demo project at: ${PORT}!`); });