import React from 'react';
import useCustomHook from '../CustomHook/CustomHook'
import Product from '../Product/Product'
import "./Service.css"
const Service = () => {
const [tours,setTours]=useCustomHook([])
console.log(tours);
    return (
        <div>
        <div className="top"> <h1 className="p-5">TOURS BY Jasim Uddin</h1> <div className="line "></div> </div>
        


        <div className="product-container">{
            tours.map((tour) =>{
               return (
                   <Product key={tour._id} tour={tour}/>
               )
            })
        }
        </div>
        </div>
    );
};

export default Service;