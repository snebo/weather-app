# Weather Forecast App

A web-based weather forecast application that provides current weather conditions and 3-day forecasts using the Visual Crossing Weather API. Users can search for weather information by location name and view detailed weather metrics including temperature, humidity, wind speed, and cloud cover.

## Features

- Location-based weather search
- Current weather conditions display
- 3-day weather forecast
- Dynamic weather icons based on conditions
- Real-time data from Visual Crossing Weather API
- Responsive design
- Visual weather indicators with custom icons

## Requirements

- Modern web browser with JavaScript enabled
- Visual Crossing Weather API key
- Node.js and npm (for development)

## Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd weather-forecast-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your API key:

```
WEATHER_API_KEY=your_api_key_here
WEATHER_URL=https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline
```

## Usage

1. Start the development server:

```bash
npm start
```

2. Open your browser and navigate to `http://localhost:3000` (or your configured port)
3. Enter a location in the search box and submit to view weather information

## API Response Format

```javascript
{
    location: "City, Country",
    current_data: {
        cloudcover: number,
        humidity: number,
        icon: string,
        precipitation: number,
        pressure: number,
        temperature: number,
        windDirection: number,
        windSpeed: number
    },
    days: [
        {
            date: "YYYY-MM-DD",
            icon: string,
            maxTemp: number,
            precipitation: number,
            temperature: number,
            windDirection: number,
            windSpeed: number
        }
        // ... additional days
    ]
}
```

## Weather Icons

The application uses different weather icons based on the following conditions:

- `partly-cloudy-day`: Partially cloudy conditions
- `cloudy`: Overcast conditions
- `rain`: Rainy conditions
- `snow`: Snowy conditions
- Default: Clear/sunny conditions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
