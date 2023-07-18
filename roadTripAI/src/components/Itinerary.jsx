import React, { useEffect, useState } from 'react';
import itineraryDummyData from '../assets/sampleItineraryData';

const Itinerary = () => {
    const [newItinerary, setNewItinerary] = useState([]);

    useEffect(() => {
        setNewItinerary(itineraryDummyData);
        console.log(itineraryDummyData)
    }, [])

    return (
        <div>
            <h1 sx={{textTransform: 'capitalize'}}>
                Itinerary:
            </h1>
            <ul>
                {newItinerary.map((item, index) => (
                    <li key={index}>
                        <li>
                            Head towards the city of 
                                <h1>{item.name}</h1> 
                                on 
                                <p>{item.date}</p> 
                                and
                                <p>{item.desc}</p>
                        </li>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Itinerary;
