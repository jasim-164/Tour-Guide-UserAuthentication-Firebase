import React,{useState,useEffect} from 'react';
import Product from '../Product/Product'
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
        <div><div>{
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