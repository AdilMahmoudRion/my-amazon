import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className="heading">{name}</h2>
                <h5><small>By: </small>{seller}</h5>
                <h1 className="price">${price}</h1>
                <p>Stock available :{stock}</p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="addToCartButton"
                >Add to cart</button>
            </div>
      </div>
    );
};

export default Product;