export async function fetchPhotos(itinerary) {
//TODO - might want to do a copy of itinerary array or useState to update
    let image
    for (let i=0; i<itinerary.length-1; i++){
        let cityName =itinerary[i].city;
        let commaIndex = cityName.indexOf(',')
        cityName = cityName.substring(0, commaIndex).replaceAll(' ', '-').toLowerCase();

    fetch(`https://api.teleport.org/api/urban_areas/slug:${cityName}/images/`)
    .then((response)=> {
        return response.json()
    })
    .then((data)=> {
        if (data && data.photos && data.photos[0]) {
        image = data.photos[0].image.web
        itinerary[i].image = image

        } else {
            console.log(`No image found for ${cityName}`)
            itinerary[i].image = null
        }
    
        
    }).catch((error)=> {
        console.log(error.toString())
        return null
    })
    }
    console.log(itinerary)
    return itinerary
    

}