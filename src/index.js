import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import TableHeaderProducts from './Components/MainTable/TableHeaderP';
import * as ReactDOMClient from 'react-dom/client';
import DataTable from './Components/MainTable';

const root = ReactDOMClient.createRoot(document.getElementById("root"));

const productsMock = [
  {
    id: 'ajgm502',
    description: 'Delicious',
    name: 'Banana',
    quantity: 5
  },
  {
    id: 'ajgm502',
    description: 'Delicious',
    name: 'Banana',
    quantity: 5
  },
  {
    id: 'ajgm502',
    description: 'Delicious',
    name: 'Banana',
    quantity: 5
  }
]
const clientsMock=[
  {
    id: 'juanC',
    surname: 'Carranza',
    name: 'Juan',
    genre: 'M',
    email: 'jcarranza@gmail.com'
  },
  {
    id: 'juanC',
    surname: 'Carranza',
    name: 'Juan',
    genre: 'M',
    email: 'jcarranza@gmail.com'
  },
  {
    id: 'juanC',
    surname: 'Carranza',
    name: 'Juan',
    genre: 'M',
    email: 'jcarranza@gmail.com'
  }
]
const ordersMock = [
  {
    id: 'hcdVWbqdMmxk2sNvx7sv',
    clientID: 'jcarranza',
    clientName: 'Juan',
    orderID: '1234JG543',
    productID: 'ajgm502'
  },
  {
    id: 'hcdVWbqdMmxk2sNvx7sv',
    clientID: 'jcarranza',
    clientName: 'Juan',
    orderID: '1234JG543',
    productID: 'ajgm502'
  },
  {
    id: 'hcdVWbqdMmxk2sNvx7sv',
    clientID: 'jcarranza',
    clientName: 'Juan',
    orderID: '1234JG543',
    productID: 'ajgm502'
  }
]
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
          <Route path="products" element={<DataTable type = {'PRODUCTS'} />}  />
          <Route path="orders" element={<DataTable  type = {'ORDERS'}/>} />
          <Route path="clients" element={<DataTable type = {'CLIENTS'}/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
