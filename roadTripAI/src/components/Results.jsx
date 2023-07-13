import { useEffect, useState } from "react";
import {fetchData} from '../assets/sampleItineraryData.jsx'

const Results = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const fetchData = await fetchData();
                setData(fetchData);
                } catch (error) {
                    // Handle Error //
                }
        };
        fetchDataFromApi();
    }, []);

    return (
        <div>
            {/* Render the fetched data */}
            {data.map((itinerary) => (
                <div key={itinerary.id}>{itinerary.id}</div>
            ))}
        </div>
    )
}

export default DataFetcher;