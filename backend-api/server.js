var express = require('express');
var app = express();
const PORT = process.env.PORT || 5050
const bp = require('body-parser')
const { getProducts } = require('./DataModels/Products/getProducts')
const {deleteProducts} =require('./DataModels/Products/deleteProducts')
const {deleteOrder} = require('./DataModels/Orders/deleteOrder')
const {editProduct}  =require('./DataModels/Products/editProduct')
const { getOrders } = require('./DataModels/Orders/getOrders');
const { getClients } = require('./DataModels/Clients/getClients');
const { json } = require('express');
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();    
})

//PRODUCTS ROUTES
app.get('/products', getProducts)
app.get('/deleteProduct/:id', (req,res) =>{
    let idToDelete = req.params.id  
    console.log(idToDelete)        
    return deleteProducts(req,res,idToDelete) 
});
app.put('/editProduct', (req,res) =>{
    console.log('vamosss')
    console.log(req.body)
    return res.status(201).json({general: "Element received succesfully"});
});
//ORDERS ROUTES
app.get('/orders', getOrders);
app.get('/deleteOrder/:id', (req,res) =>{
    let idToDelete = req.params.id          
    return deleteOrder(req,res,idToDelete) 
});

//CLIENTS ROUTES
app.get('/clients', getClients);

app.get('/', (req, res) => {
res.send('...')
})

app.listen(PORT, function () {
console.log(`API AT: ${PORT}!`); });