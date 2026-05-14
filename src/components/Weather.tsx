import "./Weather.css"
import  searchIcon from "../assets/search.png"
import  clearIcon from "../assets/clear.png"
import  cloudIcon from "../assets/cloud.png"
import  drizzleIcon from "../assets/drizzle.png"
import  humidity from "../assets/humidity.png"
import  rainIcon from "../assets/rain.png"
import  snowIcon from "../assets/snow.png"
import  windIcon from "../assets/wind.png"


export function Weather() {
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
            </div>
        </div>
    )
}