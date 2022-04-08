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

let productsMock = [
  [1,'Banana', 'Fruta deliciosa', '20'],
  [1,'Banana', 'Fruta deliciosa', '20'],
  [1,'Banana', 'Fruta deliciosa', '20'],
  [1,'Banana', 'Fruta deliciosa', '20'],
  [1,'Banana', 'Fruta deliciosa', '20'],
]

root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
        <Route path="products" element={<DataTable data = {productsMock} type = {'PRODUCTS'} />}  />
        <Route path="orders" element={<DataTable type = {'ORDERS'}/>} />
        <Route path="clients" element={<DataTable type = {'CLIENTS'}/>} />
    </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
