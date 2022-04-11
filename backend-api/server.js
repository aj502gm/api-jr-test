var express = require('express');
var app = express();

const PORT = process.env.PORT || 5050
const bp = require('body-parser')
//CRUD METHODS 
const { getProducts } = require('./DataModels/Products/getProducts')
const {deleteProducts} =require('./DataModels/Products/deleteProducts')
const {createProduct} = require('./DataModels/Products/createProduct')
const {deleteOrder} = require('./DataModels/Orders/deleteOrder')
const {editProduct}  =require('./DataModels/Products/editProduct')
const { getOrders } = require('./DataModels/Orders/getOrders');
const { editOrder } = require('./DataModels/Orders/editOrder');
const { getClients } = require('./DataModels/Clients/getClients');
const {createClient} = require('./DataModels/Clients/createClient')
const {editClient} = require('./DataModels/Clients/editClient')
const {createOrder} = require('./DataModels/Orders/createOrder')
//ADD THE 2 LINES BELOW IN ORDER TO ALLOW SOURCE SHARE DOCS
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//CORS, METHODS ALLOW  
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
app.post('/editProduct', (req,res) =>{
    console.log(req.body)
    return editProduct(req,res,req.body);
});
app.post('/createProduct', function(req, res) {
    console.log(req.body);

    return createProduct(req,res,req.body);
});
//--------------------------
//ORDERS ROUTES
app.get('/orders', getOrders);
app.get('/deleteOrder/:id', (req,res) =>{
    let idToDelete = req.params.id          
    return deleteOrder(req,res,idToDelete) 
});
app.post('/createOrder', function(req, res) {
    
    console.log(req.body);
    return createOrder(req,res,req.body);
});
app.post('/editOrder', (req,res) =>{
    console.log(req.body)
    return editOrder(req,res,req.body);
});

//--------------------------
//CLIENTS ROUTES
app.get('/clients', getClients);
app.post('/createClient', function(req, res) {
    
    console.log(req.body);
    return createClient(req,res,req.body);
});
app.post('/editClient', (req,res) =>{
    console.log(req.body)
    return editClient(req,res,req.body);
});

app.get('/', (req, res) => {
res.send('...')
})

app.listen(PORT, function () {
console.log(`API AT: ${PORT}!`); });