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
import { ApiDataProvider } from './Context/APIDataCT';

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ApiDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
              <Route path="products" element={<DataTable type = {'PRODUCTS'} />}  />
              <Route path="orders" element={<DataTable  type = {'ORDERS'}/>} />
              <Route path="clients" element={<DataTable type = {'CLIENTS'}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApiDataProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
