import "./Weather.css"
import  searchIcon from "../assets/search.png"
import  clearIcon from "../assets/clear.png"
import  cloudIcon from "../assets/cloud.png"
import  drizzleIcon from "../assets/drizzle.png"
import  humidity from "../assets/humidity.png"
import  rainIcon from "../assets/rain.png"
import  snowIcon from "../assets/snow.png"
import  windIcon from "../assets/wind.png"
import { useEffect, useState } from "react"
import { searchCityApi } from "../Scripts/SearchCityApi"

export function Weather() {
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        searchCityApi("London").then((data) => {
            setWeatherData(data)
        })
      }, [])
    return (
        <div className="weather">
            <div className= "weather">
                <div className= "search-bar">
                    <input type="text" placeholder="Enter city name" />
                    <img src={searchIcon} alt="Search" />
                </div>
                <img src={clearIcon} alt="" className="weather-icon"/>
                <p className="temperature">16°C</p>
                <p className="location">London</p>
                <div className="weather-data">
                    <div className="col">
                        <img src={humidity} alt="" />
                        <div>
                            <p>91 %</p>
                            <span>
                                Humidity
                            </span>
                        </div>
                    </div>
                    <div className="col">
                        <img src={windIcon} alt="" />
                        <div>
                            <p>12 km/h</p>
                            <span>
                                Wind Speed
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}