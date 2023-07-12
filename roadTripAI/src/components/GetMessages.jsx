
const data = {
	"id": "chatcmpl-7bH04S6zlAbnyO13RSARoWAXfZ1Tt",
	"object": "chat.completion",
	"created": 1689117840,
	"model": "gpt-3.5-turbo-0613",
	"choices": [
    	{
        	"index": 0,
        	"message": {
            	"role": "assistant",
            	"content": "{\n  \"itinerary\": [\n	{\n  	\"date\": \"2023-06-23\",\n  	\"lng\": -75.1652,\n  	\"lat\": 39.9546,\n  	\"name\": \"Philadelphia\",\n  	\"desc\": \"Visit the Liberty Bell and Independence Hall, where the Declaration of Independence and the U.S. Constitution were signed.\",\n  	\"city\": \"Philadelphia, PA\",\n  	\"time\": 0,\n  	\"temp\": 80\n	},\n	{\n  	\"date\": \"2023-06-24\",\n  	\"lng\": -77.0369,\n  	\"lat\": 38.9072,\n  	\"name\": \"Washington, D.C.\",\n  	\"desc\": \"Explore the iconic landmarks of the nation's capital, including the National Mall, Lincoln Memorial, and the Smithsonian museums.\",\n  	\"city\": \"Washington, D.C.\",\n  	\"time\": 2.5,\n  	\"temp\": 85\n	},\n	{\n  	\"date\": \"2023-06-25\",\n  	\"lng\": -79.9311,\n  	\"lat\": 37.2719,\n  	\"name\": \"Natural Bridge\",\n  	\"desc\": \"Marvel at the stunning Natural Bridge, a limestone arch spanning 215 feet in height and 90 feet in width.\",\n  	\"city\": \"Natural Bridge, VA\",\n  	\"time\": 4,\n  	\"temp\": 82\n	},\n	{\n  	\"date\": \"2023-06-26\",\n  	\"lng\": -81.6557,\n  	\"lat\": 35.7822,\n  	\"name\": \"Asheville\",\n  	\"desc\": \"Enjoy the scenic beauty of the Blue Ridge Mountains and visit the Biltmore Estate, a grand mansion and gardens.\",\n  	\"city\": \"Asheville, NC\",\n  	\"time\": 4.5,\n  	\"temp\": 79\n	},\n	{\n  	\"date\": \"2023-06-27\",\n  	\"lng\": -83.0458,\n  	\"lat\": 42.3314,\n  	\"name\": \"Detroit\",\n  	\"desc\": \"Discover the rich history of Detroit's automotive industry at the Henry Ford Museum and explore the vibrant downtown area.\",\n  	\"city\": \"Detroit, MI\",\n  	\"time\": 7,\n  	\"temp\": 77\n	},\n	{\n  	\"date\": \"2023-06-28\",\n  	\"lng\": -86.1581,\n  	\"lat\": 39.7684,\n  	\"name\": \"Indianapolis\",\n  	\"desc\": \"Visit the Indianapolis Motor Speedway, home of the famous Indy 500 race, and explore the downtown's cultural attractions.\",\n  	\"city\": \"Indianapolis, IN\",\n  	\"time\": 5,\n  	\"temp\": 84\n	},\n	{\n  	\"date\": \"2023-06-29\",\n  	\"lng\": -87.6298,\n  	\"lat\": 41.8781,\n  	\"name\": \"Chicago\",\n  	\"desc\": \"Experience the vibrant cityscape of Chicago, including Millennium Park, Navy Pier, and the Art Institute of Chicago.\",\n  	\"city\": \"Chicago, IL\",\n  	\"time\": 3.5,\n  	\"temp\": 82\n	},\n	{\n  	\"date\": \"2023-06-30\",\n  	\"lng\": -90.0715,\n  	\"lat\": 29.9511,\n  	\"name\": \"New Orleans\",\n  	\"desc\": \"Immerse yourself in the unique culture of New Orleans. Explore the French Quarter, indulge in delicious cuisine, and enjoy live jazz music.\",\n  	\"city\": \"New Orleans, LA\",\n  	\"time\": 9,\n  	\"temp\": 89\n	},\n	{\n  	\"date\": \"2023-07-01\",\n  	\"lng\": -94.5786,\n  	\"lat\": 39.0997,\n  	\"name\": \"Kansas City\",\n  	\"desc\": \"Discover the vibrant arts scene of Kansas City, visit the Nelson-Atkins Museum of Art, and savor Kansas City-style barbecue.\",\n  	\"city\": \"Kansas City, MO\",\n  	\"time\": 11,\n  	\"temp\": 85\n	},\n	{\n  	\"date\": \"2023-07-02\",\n  	\"lng\": -104.9903,\n  	\"lat\": 39.7392,\n  	\"name\": \"Denver\",\n  	\"desc\": \"Explore the Rocky Mountains and enjoy outdoor activities. Visit the Denver Art Museum and stroll along the 16th Street Mall.\",\n  	\"city\": \"Denver, CO\",\n  	\"time\": 8,\n  	\"temp\": 78\n	},\n	{\n  	\"date\": \"2023-07-03\",\n  	\"lng\": -106.6297,\n  	\"lat\": 35.0844,\n  	\"name\": \"Santa Fe\",\n  	\"desc\": \"Experience the rich culture and history of Santa Fe. Explore the art galleries, visit the historic Plaza, and savor Southwest cuisine.\",\n  	\"city\": \"Santa Fe, NM\",\n  	\"time\": 6.5,\n  	\"temp\": 83\n	},\n	{\n  	\"date\": \"2023-07-04\",\n  	\"lng\": -108.5007,\n  	\"lat\": 45.5231,\n  	\"name\": \"Billings\",\n  	\"desc\": \"Celebrate Independence Day in Billings and enjoy the fireworks display. Take in the scenic beauty of Montana's landscapes.\",\n  	\"city\": \"Billings, MT\",\n  	\"time\": 8.5,\n  	\"temp\": 75\n	},\n	{\n  	\"date\": \"2023-07-05\",\n  	\"lng\": -111.891,\n  	\"lat\": 40.7608,\n  	\"name\": \"Salt Lake City\",\n  	\"desc\": \"Discover the natural beauty of Utah. Visit Temple Square and explore the outdoor recreation opportunities in the nearby mountains.\",\n  	\"city\": \"Salt Lake City, UT\",\n  	\"time\": 6.5,\n  	\"temp\": 82\n	},\n	{\n  	\"date\": \"2023-07-06\",\n  	\"lng\": -114.0719,\n  	\"lat\": 51.0447,\n  	\"name\": \"Calgary\",\n  	\"desc\": \"Experience the vibrant city of Calgary. Visit the Calgary Stampede, explore the city's parks, and enjoy panoramic views from the Calgary Tower.\",\n  	\"city\": \"Calgary, AB\",\n  	\"time\": 9.5,\n  	\"temp\": 73\n	},\n	{\n  	\"date\": \"2023-07-07\",\n  	\"lng\": -122.3321,\n  	\"lat\": 47.6062,\n  	\"name\": \"Seattle\",\n  	\"desc\": \"Explore the iconic landmarks of Seattle, including the Space Needle, Pike Place Market, and enjoy stunning views of the Puget Sound.\",\n  	\"city\": \"Seattle, WA\",\n  	\"time\": 12,\n  	\"temp\": 75\n	},\n	{\n  	\"date\": \"2023-07-08\",\n  	\"lng\": -123.1207,\n  	\"lat\": 49.2827,\n  	\"name\": \"Victoria\",\n  	\"desc\": \"Take a ferry to Victoria, British Columbia. Explore the picturesque Butchart Gardens and enjoy the charm of downtown Victoria.\",\n  	\"city\": \"Victoria, BC\",\n  	\"time\": 3.5,\n  	\"temp\": 73\n	},\n	{\n  	\"date\": \"2023-07-09\",\n  	\"lng\": -118.2437,\n  	\"lat\": 34.0522,\n  	\"name\": \"Los Angeles\",\n  	\"desc\": \"Arrive in Los Angeles and explore the diverse neighborhoods, visit the Hollywood Walk of Fame, and enjoy the beautiful beaches.\",\n  	\"city\": \"Los Angeles, CA\",\n  	\"time\": 18,\n  	\"temp\": 88\n	}\n  ]\n}"
        	},
        	"finish_reason": "stop"
    	}
	],
	"usage": {
    	"prompt_tokens": 229,
    	"completion_tokens": 1667,
    	"total_tokens": 1896
	}
}

const GetItinerary = () => {

    const [itinerary, setItinerary] = useState(null);

//fetch call
   
      
//obtain itinerary content and set itinerary to an iterable array of objects 
      setItinerary(JSON.parse(data.choices[0].message.content))

}


