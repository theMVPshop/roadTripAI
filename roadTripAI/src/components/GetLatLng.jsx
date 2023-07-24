export async function getStartingPoint(startLocation, endLocation) {
  const secretKey = import.meta.env.VITE_SECRET_KEY;
 
  const url = "https://api.openai.com/v1/chat/completions";
 
//   const prompt = `please return the latitude and longitude for ${startLocation} and ${endLocation}. Return each location as an object. Each Object should have 2 key-value pairs like this {lat: num, lng: num}, {lat: num, lng: num}. Put these 2 objects inside of array`;

const prompt = `please return the latitude and longitude for ${startLocation} and ${endLocation}.  Return each location as an object. Each Object should have 2 key-value pairs like this {lat: num, lng: num}, {lat: num, lng: num}. Put these 2 objects inside of array`;

  return fetch(url, {
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
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        let startPoint;
        let endPoint;
        let parsedContent;
        console.log(JSON.parse(data.choices[0].message.content))

        parsedContent = JSON.parse(data.choices[0].message.content);

        //if API returns an object with a nested array, then access the only key-value pair, which should be the array
        if (!Array.isArray(parsedContent) && parsedContent !== undefined) {
          startPoint = Object.values(parsedContent)[0];
          endPoint = Object.values(parsedContent)[1];
        }

    //   let startPoint = JSON.parse(data.choices[0].message.content.locations[0]);
    //   let endPoint =JSON.parse(data.choices[0].message.content.locations[1])
        
      let arrayPoints = [startPoint, endPoint]
      console.log([startPoint, endPoint])

      return arrayPoints;
      
    });

    
}
