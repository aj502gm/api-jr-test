import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import TableHeader from './Components/MainTable/TableHeader';
import * as ReactDOMClient from 'react-dom/client';
import DataTable from './Components/MainTable';

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
        <Route path="products" element={<DataTable columns = {['codigo', 'nombre', 'descripcion', 'cantidad']}/>} />
        <Route path="orders" element={<DataTable columns = {['numero', 'nombre cliente', 'id cliente', 'producto', 'fecha']}/>} />
        <Route path="clients" element={<DataTable columns = {['nombre', 'apellido', 'edad', 'genero', 'email']}/>} />
    </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
