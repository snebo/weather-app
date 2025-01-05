import "./assets/styles.css"
import { WEATHER_API_KEY, WEATHER_URL } from "./scripts/enviroments"

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form")
    form.addEventListener("submit", async (event) => {
        event.preventDefault()
        const place = document.querySelector("#place").value
        const query_data = await fetchWeatherInfor(place)
        console.log(processWeatherInfo(query_data))
        changeUi(query_data)
    })
})
async function fetchWeatherInfor(address) {
    try {
        const response = await fetch(`${WEATHER_URL}/${address}?unitGroup=metric&key=${WEATHER_API_KEY}&contentType=json`,
            { mode: "cors" })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}
function processWeatherInfo(data) {
    const location = data.resolvedAddress
    const alearts = data.alearts
    const current_data = {}
    current_data.cloudcover = data.currentConditions.cloudcover
    current_data.humidity = data.currentConditions.humidity
    current_data.precipitation = data.currentConditions.percip
    current_data.humidity = data.currentConditions.humidity
    current_data.precipitation = data.currentConditions.precip
    current_data.pressure = data.currentConditions.pressure
    current_data.sunshine = data.currentConditions.sunshine
    current_data.temperature = data.currentConditions.temp
    current_data.windDirection = data.currentConditions.winddir
    current_data.windSpeed = data.currentConditions.windspeed
    current_data.icon = data.currentConditions.icon
    const days = []
    for (let i = 0; i < 3; i++) {
        const day = {}
        day.date = data.days[i].datetime
        day.icon = data.days[i].icon
        day.precipitation = data.days[i].precip
        day.temperature = data.days[i].temp
        day.maxTemp = data.days[i].tempmax
        day.windDirection = data.days[i].winddir
        day.windSpeed = data.days[i].windspeed
        day.solarRadiation = data.days[i].solarradiation
        data.perciptpe = data.days[i].perciptype
        days.push(day)
    }
    return { location, alearts, current_data, days }
}

function changeUi(data) {
    if (!data) return // if there is no data
    // update text ui
    // use switch to select which imgage to load
}

// example data
// {
//     alearts: undefined,
//     current_data: {
//         cloudcover: 23.1,
//         humidity: 54.5,
//         icon: "partly-cloudy-day",
//         precipitation: null,
//         pressure: 1010.6,
//         sunshine: undefined,
//         temperature: 33.9,
//         windDirection: 139,
//         windSpeed: 12.7,
//     }
//     days: [
//         {
//             date: "2025-01-05",
//             icon: "rain",
//             maxTemp: 31,
//             precipitation: 0.4,
//             solarRadiation: 258.5,
//             temperature: 27.9,
//             windDirection: 222.8,
//             windSpeed: 26.6,
//         },
//         { date: '2025-01-06', icon: 'partly-cloudy-day', precipitation: 0.2, temperature: 28, maxTemp: 28.4, },
//         { date: '2025-01-07', icon: 'partly-cloudy-day', precipitation: 0.2, temperature: 28, maxTemp: 28.6, },
//     ],
//     location: "Lagos, Nigeria"
// }