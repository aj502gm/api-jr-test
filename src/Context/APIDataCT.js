import {Children ,useState, createContext } from "react";
import axios from "axios";
export const APIDataCT = createContext('Data');

export const ApiDataProvider = (props) =>{
    //PRODUCTS RELATED DATA
        //PRODUCTS STORE
            const [productsData, setProductsData] = useState([])
        //GET METHOD
            const getProductData = async () => {
                const response = await fetch("https://apitestjr.herokuapp.com/products");
                setProductsData(await response.json())
            }
        //CREATE METHOD STATE + POST METHOD
            const [newProductData, setNewProductData] = useState({
                id: "th94gg",
                name: "PS4",
                description: "Slim",
                quantity: "4"
            })
            const createProductData = async () => {
                axios
                .post('https://apitestjr.herokuapp.com/createProduct', newProductData)
                .then(() => setProductsData((prevState) => [...prevState, newProductData]))
                .catch(err => {
                console.error(err);
                });
            }
        //DELETE METHOD
            const deleteProductData = async (position) => {
                let response2 = await fetch(`https://apitestjr.herokuapp.com/deleteProduct/${productsData[position].id}`)
                setProductsData(productsData.filter(value => value.id  != productsData[position].id))
            }
        //UPDATE METHOD STATE + POST (UPDATE) METHOD
            const [updateProductData, setUpdateProductData] = useState({
                id: "",
                name: "",
                description: "",
                quantity: 0
            })
            const updateProductDataMethod = async (data,position) => {
                console.log(data);
                axios
                .post('https://apitestjr.herokuapp.com/editProduct', data)
                .then(() => {
                    console.log('Product sent to be updated')
                    let newData =[...productsData]
                    newData[position] = data
                    console.log(newData);
                    setProductsData(newData)
                })
                .catch(err => {
                console.error(err);
                });
            }
    //ORDERS RELATED DATA
        //ORDERS STORE
            const [ordersData, setOrdersData] = useState([])
        //GET METHOD
            const getOrdersData = async () => {
                const response = await fetch("https://apitestjr.herokuapp.com/orders");
                setOrdersData(await response.json())
            }
        //CREATE METHOD STATE + POST METHOD
            const [newOrderData, setNewOrderData] = useState({
                orderID: "1234567",
                clientId: "aGonzalez",
                clientName: "Andres",
                productID: "agm43",
            })
            const createOrderData = async () => {
                axios
                .post('https://apitestjr.herokuapp.com/createOrder', newOrderData)
                .then(() => setOrdersData((prevState) => [...prevState, newOrderData]))
                .catch(err => {
                console.error(err);
                });
            }
        //DELETE METHOD
            const deleteOrderData = async (position) => {
                let response2 = await fetch(`https://apitestjr.herokuapp.com/deleteOrder/${ordersData[position].orderID}`)
                setOrdersData(ordersData.filter(value => value.orderID  != ordersData[position].orderID))
            }
        //UPDATE METHOD STATE + POST (UPDATE) METHOD
            const [updateOrderData, setUpdateOrderData] = useState({
                orderID: "",
                clientId: "",
                clientName: "",
                productID: "",
            })
            const UpdateOrderDataMethod = async (data,position) => {
                
                axios
                .post('https://apitestjr.herokuapp.com/editOrder', data)
                .then(() => {
                    console.log('Ordered sent to be updated')
                    let newData =[...ordersData]
                    newData[position] = data
                    console.log(newData);
                    setOrdersData(newData)
                })
                .catch(err => {
                console.error(err);
                });
                //setOrdersData(ordersData.filter(value => value.orderID  != ordersData[position].orderID))
            }
    //CLIENT RELATED DATA
        //CLIENTS STORE
        const [clientsData, setClientsData] = useState([])
        //GET METHOD
            const getClientsData = async () => {
                const response = await fetch("https://apitestjr.herokuapp.com/clients");
                setClientsData(await response.json())
            }
        //CREATE METHOD STATE + POST METHOD
            const [newClientData, setNewClientData] = useState({
                id: "",
                name: "",
                surname: "",
                genre: "",
                email: ""
            })
            const createClientData = async () => {
                axios
                .post('https://apitestjr.herokuapp.com/createClient', newClientData)
                .then(() => setClientsData  ((prevState) => [...prevState, newClientData]))
                .catch(err => {
                    console.error(err);
                });
            }
        ////UPDATE METHOD STATE + POST (UPDATE) METHOD
            const [updateClientData, setUpdateClientData] = useState({
                id: "",
                name: "",
                surname: "",
                genre: "",
                email: "",
            })
            const UpdateClientDataMethod = async (data,position) => {
                axios
                .post('https://apitestjr.herokuapp.com/editClient', data)
                .then(() => {
                    let newData =[...clientsData]
                    newData[position] = data
                    console.log(newData);
                    setClientsData(newData)
                })
                .catch(err => {
                console.error(err);
                });
                //setOrdersData(ordersData.filter(value => value.orderID  != ordersData[position].orderID))
            }
            
    return(
        <APIDataCT.Provider value = {{productsData,newProductData,setNewProductData,newOrderData,createProductData,ordersData,getOrdersData,createOrderData,setNewOrderData,getProductData,clientsData,getClientsData,newClientData,setNewClientData,createClientData,deleteProductData,deleteOrderData, updateProductData,updateProductDataMethod,setUpdateProductData,updateOrderData, setUpdateOrderData,UpdateOrderDataMethod,updateClientData, setUpdateClientData,UpdateClientDataMethod}}>
            {props.children}
        </APIDataCT.Provider>
    )
}