import { useEffect, useState } from "react";
import {fetchData} from '../assets/images/sampleIteneraryData.jsx'

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
        }
    })
}