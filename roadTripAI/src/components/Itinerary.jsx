import React, { useEffect, useState } from 'react';
import itineraryDummyData from '../assets/sampleItineraryData';

const Itinerary = ({stops}) => {
    const [newItinerary, setNewItinerary] = useState([]);

    useEffect(() => {
        setNewItinerary(stops);
        console.log(stops)
    }, [stops])

    return (
        <div>
            <h1 sx={{textTransform: 'capitalize'}}>
                Itinerary:
            </h1>
            <ul>
                {newItinerary.map((item, index) => (
                    <ul key={index}>
                        <ul>
                            Head towards the city of 
                                <li>{item.name}</li> on 
                                <li>{item.date}</li> and
                                <li>{item.desc}</li>
                        </ul>
                    </ul>
                ))}
            </ul>
        </div>
    );
}

export default Itinerary;
