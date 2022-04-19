import React from 'react';
import { Carousel } from 'react-bootstrap';
import photo1 from "../../../images/tourguide.jpg"
import photo2 from "../../../images/TourGuide-2.png"
import photo3 from "../../../images/tourguide3.jpg"

const CarouselItem = () => {
  
    return (
        <div>
        <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo1}
            alt="First slide"
          />
         
          <Carousel.Caption>
            <h5>Follow me and enjoy the Tour</h5>
            <p className="bg-info ms-5 w-75 ">Showing the beatiful place to the visitor. they really enjoyed it.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo2}
           
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Map showing to the beatiful people</h5>
            <p className="bg-info">most people did't know about the tourist place. So I told them where the beatiful tourist location is located. And also told them which was the convenient way to save money.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Map showing to the beatiful people</h5>
            <p className="bg-info">most people did't know about the tourist place. So I told them where the beatiful tourist location is located. And also told them which was the convenient way to save money.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

            
        </div>
    );
};

export default CarouselItem;