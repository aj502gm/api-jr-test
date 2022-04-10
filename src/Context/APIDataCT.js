import {Children ,useState, createContext } from "react";
import axios from "axios";
export const APIDataCT = createContext('Data');

export const ApiDataProvider = (props) =>{
    //PRODUCTS RELATED DATA
        //PRODUCTS STORE
            const [productsData, setProductsData] = useState([])
        //GET METHOD
            const getProductData = async () => {
                const response = await fetch("http://localhost:5050/products");
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
                .post('http://localhost:5050/createProduct', newProductData)
                .then(() => setProductsData((prevState) => [...prevState, newProductData]))
                .catch(err => {
                console.error(err);
                });
            }
        //DELETE METHOD
            const deleteProductData = async (position) => {
                let response2 = await fetch(`http://localhost:5050/deleteProduct/${productsData[position].id}`)
                setProductsData(productsData.filter(value => value.id  != productsData[position].id))
            }
    //ORDERS RELATED DATA
        //ORDERS STORE
            const [ordersData, setOrdersData] = useState([])
        //GET METHOD
            const getOrdersData = async () => {
                const response = await fetch("http://localhost:5050/orders");
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
                .post('http://localhost:5050/createOrder', newOrderData)
                .then(() => setOrdersData((prevState) => [...prevState, newOrderData]))
                .catch(err => {
                console.error(err);
                });
            }
        //DELETE METHOD
            const deleteOrderData = async (position) => {
                let response2 = await fetch(`http://localhost:5050/deleteOrder/${ordersData[position].orderID}`)
                setOrdersData(ordersData.filter(value => value.orderID  != ordersData[position].orderID))
            }
    //CLIENT RELATED DATA
        //CLIENTS STORE
        const [clientsData, setClientsData] = useState([])
        //GET METHOD
            const getClientsData = async () => {
                const response = await fetch("http://localhost:5050/clients");
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
                .post('http://localhost:5050/createClient', newClientData)
                .then(() => clientsData((prevState) => [...prevState, newClientData]))
                .catch(err => {
                    console.error(err);
                });
            }

    //CLIENTS RELATED DATA
    return(
        <APIDataCT.Provider value = {{productsData,newProductData,setNewProductData,newOrderData,createProductData,ordersData,getOrdersData,createOrderData,setNewOrderData,getProductData,clientsData,getClientsData,newClientData,setNewClientData,createClientData,deleteProductData,deleteOrderData}}>
            {props.children}
        </APIDataCT.Provider>
    )
}