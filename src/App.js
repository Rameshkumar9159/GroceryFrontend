import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import CheckoutSuccess from './components/CheckoutSuccess';
import Header from './components/Header';
import './App.css';
import CustomItemContext from './ItemContext'; 

const App = () => {
    return (
        <Router>
            <CustomItemContext>
                <Header />
                <ProductList />
                <Routes>
                    <Route path="/ProductList" element={<ProductList />} />
                    <Route path="/checkout-success" element={<CheckoutSuccess />} />
                </Routes>
            </CustomItemContext>
        </Router>
    );
};

export default App;
