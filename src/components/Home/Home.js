import React,{useState,useEffect} from 'react';
import { PageItem } from 'react-bootstrap';
import "./Home.css"
import Product from '../Product/Product'
import photo1 from "../../images/tourguide.jpg"
const Home = () => {
    const [tours,setTours]=useState([]);


    useEffect(()=>{
        fetch('data.json')
        .then(result =>result.json())
        .then(data => setTours(data));
    },[]);
    //console.log(tours[0].place);
    //<h1>{tours[0].price}</h1>
    // return(<Product key={tour._id} tour={tour} />)
    
    return (
        <div>
        <div>
        <img src={photo1} alt="place" height=" " width=""/>
        </div>
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

export default Home;