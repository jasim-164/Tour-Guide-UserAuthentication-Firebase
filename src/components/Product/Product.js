import React from 'react';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import "./Product.css"
const Product = ({tour}) => {
    const {_id,place,picture,price,description}=tour;
    return (
        <div>
            <div className="container">
            <div className="product" key={_id}>
            <h1 className="">{place}</h1>
            <div><img src={picture} alt={place}  /></div>
            {
                description.length>200 ? 
                <p>{description.slice(0,200)} ...</p>: <p>{description}</p>
            }

            <h4>{price} per tour</h4>
            <Button as={Col} variant="primary">Purchase</Button>
            </div>
            </div>
        </div>
    );
};

export default Product;