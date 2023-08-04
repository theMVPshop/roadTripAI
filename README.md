# RoadTrip AI

Plan your next road trip with AI! This React application generates a unique itinerary for your road trip, including points of interest and stops along the way, with the help of OpenAI's GPT-3.5-turbo model. This tool also verifies and enriches the data with location photos fetched from the Unsplash API.

## Features

- **AI-generated itinerary:** Your road trip itinerary is generated based on your start and end locations, as well as start and end dates.
- **Autocomplete location inputs:** Easy to input location data.
- **Dynamic itinerary adjustment:** If you change your inputs, the itinerary is recalculated.
- **Data verification and enrichment:** Coordinates for each stop in the itinerary are verified and enriched with photos from Unsplash.

## Usage

1. Clone the repository.
2. cd into /roadTripAI
2. Run `npm install` to install dependencies.
3. Add your API keys to the .env file:
   - `VITE_SECRET_KEY` for OpenAI's GPT-3.5-turbo
   - `VITE_UNSPLASH_ACCESS_KEY` for Unsplash API
4. Start the application with `npm run dev`.
5. Open your browser and navigate to url displayed in your terminal.
6. Input your start location, end location, and dates.
7. Click 'Submit' to generate the itinerary.

## Built With

- React.js
- OpenAI's GPT-3.5-turbo
- Google Place AutoComplete API
- Leaflet Maps
- Geocode Maps API
- Unsplash API

## Project Structure

The `MainMenu` component is the primary component for user interaction. It takes user inputs for the start and end locations, as well as start and end dates. Upon form submission, it makes API calls to generate the itinerary, obtain accurate latitudes and longitudes, and fetch photos for each stop.

Key Components:

- `PlacesAutoComplete`: A helper component for inputting location data with autocomplete.
- `DatePicker`: A helper component for selecting dates.
- `Itinerary`: Displays the generated itinerary.
- `LeafletMap`: Displays the itinerary on an interactive map.
- `LoadingSpinner`: Displays a loading spinner and message while the itinerary is being generated.
- `RealLatLng`: Fetches and verifies coordinates for each stop in the itinerary.
- `GetPhotos`: Fetches photos for each stop in the itinerary from Unsplash.

## License

This project is licensed under the MIT License.
