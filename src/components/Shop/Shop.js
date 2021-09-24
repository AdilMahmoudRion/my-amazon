import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="shop">
            <div className="product">
                <h1>adil</h1>
                <h1>array length: {products.length}</h1>
            </div>
            <div className="cart">
                <p>thsi</p>
            </div>
        </div>
    );
};

export default Shop;