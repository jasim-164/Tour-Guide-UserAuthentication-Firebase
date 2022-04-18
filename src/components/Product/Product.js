import React, {useNavigate} from 'react';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import Checkout from '../Checkout/Checkout'
import "./Product.css"
import { Link, Navigate } from 'react-router-dom';
const Product = ({tour}) => {
    const {_id,place,picture,price,description}=tour;
    
    const selectProduct= () => {
        <Checkout/>
    }
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
            
            <Link to="/checkout" className="button"><Button as={Col} variant="primary" onClick={() =>selectProduct}>Purchase</Button></Link>
            </div>
            </div>
        </div>
    );
};

export default Product;