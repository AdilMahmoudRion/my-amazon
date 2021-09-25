import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop">
            <div className="product">
                <h1>adil</h1>
                <h1>array length: {products.length}</h1>
                {
                    products.map(product => <Product
                        handleAddToCart = {handleAddToCart}
                        key={product.key}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart">
                <h5>Order summary</h5>
                <h6>Item Order: {cart.length}</h6>
            </div>
        </div>
    );
};

export default Shop;