import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import Checkout from '../Checkout/Checkout'
import "./Product.css"
import { Link,useNavigate } from 'react-router-dom';
const Product = ({tour}) => {
    const {_id,place,picture,price,description}=tour;

    return (
        <div>
            <div className="container">
            <div className="product" key={_id}>
            <h1 className="">{place}</h1>
            <div><img src={picture} height="250" width="250"alt={place}  /></div>
            {
                description.length>200 ? 
                <p>{description.slice(0,210)} ...</p>: <p>{description}</p>
            }

            <h4>{price} per tour</h4>
            
           <Link to='/checkout'> 
            <Button as={Col} variant="primary" className="mt-2 mb-3">Purchase</Button>
           </Link>


            </div>
            </div>
        </div>
    );
};

export default Product;