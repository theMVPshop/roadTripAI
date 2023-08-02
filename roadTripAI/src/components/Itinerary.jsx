import React, { useEffect, useState } from 'react';
import itineraryDummyData from '../assets/sampleItineraryData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Itinerary = ({stops}) => {
    const [newItinerary, setNewItinerary] = useState([]);

    useEffect(() => {
        setNewItinerary(stops);
    }, [stops])


const carouselItems = newItinerary.map(item => (
    <div key={item.name}>
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
    </div>
));
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return (
        <div className="itinerarySlider">
      <Slider {...settings}>{carouselItems}</Slider>
    </div>
  );
};

export default Itinerary;
