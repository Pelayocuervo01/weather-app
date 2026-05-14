import "./Weather.css"
import searchIcon from "../assets/search.png"
import clearIcon from "../assets/clear.png"
import cloudIcon from "../assets/cloud.png"
import drizzleIcon from "../assets/drizzle.png"
import humidityIcon from "../assets/humidity.png"
import rainIcon from "../assets/rain.png"
import snowIcon from "../assets/snow.png"
import windIcon from "../assets/wind.png"
import { useEffect, useRef, useState } from "react"
import { searchCityApi } from "../Scripts/SearchCityApi"

const weatherIcons: Record<number, string> = {
    200: rainIcon, 201: rainIcon, 202: rainIcon, 210: rainIcon,
    211: rainIcon, 212: rainIcon, 221: rainIcon, 230: rainIcon,
    231: rainIcon, 232: rainIcon,
    300: drizzleIcon, 301: drizzleIcon, 302: drizzleIcon, 310: drizzleIcon,
    311: drizzleIcon, 312: drizzleIcon, 313: drizzleIcon, 314: drizzleIcon,
    321: drizzleIcon,
    500: rainIcon, 501: rainIcon, 502: rainIcon, 503: rainIcon,
    504: rainIcon, 511: snowIcon, 520: rainIcon, 521: rainIcon,
    522: rainIcon, 531: rainIcon,
    600: snowIcon, 601: snowIcon, 602: snowIcon, 611: snowIcon,
    612: snowIcon, 613: snowIcon, 615: snowIcon, 616: snowIcon,
    620: snowIcon, 621: snowIcon, 622: snowIcon,
    800: clearIcon,
    801: cloudIcon, 802: cloudIcon, 803: cloudIcon, 804: cloudIcon,
}

interface WeatherData {
    name: string
    main: { temp: number; humidity: number }
    wind: { speed: number }
    weather: { id: number }[]
}

export function Weather() {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const search = (city: string) => {
        searchCityApi(city)
            .then((data) => setWeatherData(data))
            .catch((err) => console.error(err))
    }

    useEffect(() => {
        search("London")
    }, [])

    const conditionIcon = weatherData
        ? (weatherIcons[weatherData.weather[0].id] ?? clearIcon)
        : clearIcon

    return (
        <div className="weather">
            <div className="search-bar">
                <input ref={inputRef} type="text" placeholder="Enter city name" />
                <img
                    src={searchIcon}
                    alt="Search"
                    onClick={() => {
                        if (inputRef.current?.value) search(inputRef.current.value)
                    }}
                />
            </div>
            <img src={conditionIcon} alt="Weather icon" className="weather-icon" />
            {weatherData && (
                <>
                    <p className="temperature">{Math.round(weatherData.main.temp)}°C</p>
                    <p className="location">{weatherData.name}</p>
                    <div className="weather-data">
                        <div className="col">
                            <img src={humidityIcon} alt="" />
                            <div>
                                <p>{weatherData.main.humidity}%</p>
                                <span>Humidity</span>
                            </div>
                        </div>
                        <div className="col">
                            <img src={windIcon} alt="" />
                            <div>
                                <p>{weatherData.wind.speed} km/h</p>
                                <span>Wind Speed</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
