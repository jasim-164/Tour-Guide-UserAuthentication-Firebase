import React from 'react';
import "./Product.css"
const Product = ({tour}) => {
    const {_id,place,picture,price}=tour;
    return (
        <div>
            <div className="container">
            <div className="product">
            <h1>{price}</h1>
            <img src={picture} alt={place}  height="150" width="150"/>
            </div>
            </div>
        </div>
    );
};

export default Product;