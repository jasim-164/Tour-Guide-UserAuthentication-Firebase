import React,{useState,useEffect} from 'react';
import { PageItem } from 'react-bootstrap';
import "./Home.css"
import Product from '../Product/Product'
import photo1 from "../../images/tourguide.jpg"
import sponsor1 from '../../sponsor/sponsors1.png'
import sponsor2 from '../../sponsor/sponsors2.png'
import sponsor3 from '../../sponsor/sponsors3.png'
import sponsor4 from '../../sponsor/sponsors4.png'
import sponsor5 from '../../sponsor/sponsors5.png'
import Carousel from './Carousel/Carousel'
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
  
        
        <h1 className="p-5">TOURS BY Jasim Uddin</h1>
        <div className="product-container">{
            tours.map((tour) =>{
               return (
                   <Product key={tour._id} tour={tour}/>
               )
            })
        }
        </div>

        <section class="subscribe section">
        <div class="subscribe__bg">
            <div class="subscribe__container container">
                <h2 class="section__title subscribe__title">Subscribe Our <br/> Newsletter</h2>
                <p class="subscribe__description">Subscribe to our newsletter and get a 
                    special 30% discount.
                </p>

                <form action="" class="subscribe__form">
                    <input type="text" placeholder="Enter email" class="subscribe__input"/>

                    <button class="button">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    </section>
    
  
    <section class="sponsor section">
        <div class="sponsor__container container grid mt-5">
            <div class="sponsor__content">
                <img src={sponsor1} alt="" class="sponsor__img pe-2 "/>
            </div>
            <div class="sponsor__content">
                <img src={sponsor2} alt="" class="sponsor__img pe-2 "/>
            </div>
            <div class="sponsor__content">
                <img src={sponsor3} alt="" class="sponsor__img pe-2 "/>
            </div>
            <div class="sponsor__content">
                <img src={sponsor4} alt="" class="sponsor__img pe-2 "/>
            </div>
            <div class="sponsor__content ">
                <img src={sponsor5} alt="" height="10" width="10" class="sponsor__img pe-2 "/>
            </div>
        </div>
    </section>

        </div>
    );
};

export default Home;