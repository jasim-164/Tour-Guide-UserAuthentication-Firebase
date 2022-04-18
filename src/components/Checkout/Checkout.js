import React from 'react';
import { Button } from 'react-bootstrap';
import "./Checkout.css"
const Checkout = ({_id,place,picture,price,description}) => {
    return (
        <div className="checkout-body">
        <h1 className="bg-info">Checkout Form</h1>


<main id='container'>
        <aside id='info'>
            <label for='paymentMethod'>Payment Method</label>
            <select name='paymentMethod'>
                <option>Visa</option>
                <option>MasterCard</option>
                <option>Elo</option>
            </select>

           
            <label for='cardNumber'>Credit Card Number</label>
            <input type='text' name='cardNumber' />

            <label for='cardholderName'>Cardholder Name</label>
            <input type='text' name='cardholderName' />

        
            <label for='cardDate'>Expiration Date</label>
            <input type='text' name='cardDate' />

           
            <label for='cvv'>CVV</label>
            <input type='text' name='cvv' />

            <Button id='makePayment' variant='primary' className="mt-5">MAKE A PAYMENT</Button>
        </aside>
        <aside id='description'>
          <h2>Original wayfarer classic</h2>
          <h3>Green classic g-15</h3>
          <img src={picture} alt="checkout"/>
          <h1>$150</h1>
          <Button id='editOrder' className="mb-5">Edit the Order</Button>
        </aside>
    </main>
        </div>
    );
};

export default Checkout;