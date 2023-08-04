import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Itinerary = ({stops}) => {
    const [newItinerary, setNewItinerary] = useState([]);

    useEffect(() => {
      if (stops.length > 2){
        setNewItinerary(stops);
      }
      else setNewItinerary([])
    }, [stops])


const carouselItems = newItinerary.map(item => (
    <div key={item.name}>
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <img src={item.image} alt={`A photo of ${item.name}`}/>
        
    </div>
));
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
    return (
        <div className="itinerarySlider">
      <Slider {...settings}>{carouselItems}</Slider>
    </div>
  );
};

export default Itinerary;
