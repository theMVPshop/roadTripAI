const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export async function fetchPhotos(fetchedItinerary) {

  const requests = fetchedItinerary.map((stop, i) => {
    let attraction = stop.name;
    
    return fetch(`https://api.unsplash.com/photos/random?query=${attraction}`, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data && data.urls) {
          stop.image = data.urls.thumb;
        } else {
          stop.image = null;
        }
      })
      .catch((error) => {
        console.log(error.toString());
        stop.image = null;
      });
  });
  await Promise.all(requests);

  return fetchedItinerary;
}
