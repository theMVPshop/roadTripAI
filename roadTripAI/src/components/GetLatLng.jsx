export async function GetLatLng(startLocation, endLocation) {
  const secretKey = import.meta.env.VITE_SECRET_KEY;
 
  const url = "https://api.openai.com/v1/chat/completions";
 

const prompt = `I'm trying to obtain the latitude and longitude for a starting city and ending city that I can use to plot each location on a map. So I need them returned in a specific format. Please return the latitude and longitude for ${startLocation} and ${endLocation}.  Return an unnamed array with each location as an object. Each location object should have 2 key-value pairs like this {lat: num, lng: num}.`;

 try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant who responds only in JSON objects",
          },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error. Status: ${response.status}`);
    }

    const data = await response.json();
    let coordinates;
    let parsedContent;

    parsedContent = JSON.parse(data.choices[0].message.content);

        //if API returns an object with a nested array, then access the only key-value pair, which should be the array
        if (!Array.isArray(parsedContent) && parsedContent !== undefined) {
          coordinates = Object.values(parsedContent)[0];
         
        } else {
        coordinates = parsedContent[0];
        }
        
      let locationCoordinates = [coordinates]
     
      return locationCoordinates;
      
    } catch(error) {
      throw error;  
      // re-throw the error to be caught by the GetLatLng call in GetItinerary
    } ; 
}
