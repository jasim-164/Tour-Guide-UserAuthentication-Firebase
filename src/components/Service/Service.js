import React from 'react';
import useCustomHook from '../CustomHook/CustomHook'
import Product from '../Product/Product'
const Service = () => {
const [tours,setTours]=useCustomHook([])
console.log(tours);
    return (
        <div>
        <div className="d-flex flex-grow ">
        {
               tours.map((tour) => {
                return(
                <Product key={tour._id} tour={tour} />)
            })}
        </div>
        </div>
    );
};

export default Service;