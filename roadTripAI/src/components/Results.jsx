import { useEffect, useState } from "react";
import {fetchData} from '../assets/sampleIteneraryData.jsx'

const DataFetcher = () => {
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
            {data.map((item) => (
                <div key={item.id}>{item.id}</div>
            ))}
        </div>
    )
}

export default DataFetcher;