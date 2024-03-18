import axios from "axios"
import { useEffect, useState } from "react"

const Country = ({ country }) => {
    const key = import.meta.env.VITE_API_KEY
    const [temp, setTemp] = useState(0)
    const [wind, setWind] = useState(0)
    const [icon, setIcon] = useState("")
console.log(country)
    const hook = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${key}&units=metric`)
        .then(res => {
            setTemp(res.data.main.temp)
            setWind(res.data.wind.speed)
            setIcon(res.data.weather[0].icon)
        })
    }
    useEffect(hook, [])

    const languages = Object.values(country.languages)
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h4>languages:</h4>
            <ul>
                {languages.map((lang, i) => 
                    <li key={i}>{lang}</li>
                )}
            </ul>
            <img src={country.flags.png} width="150px"alt="country-flag"/>
            <h3>Weather in {country.capital}</h3>
            <p>temperature {temp} Celcius</p>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon"/>
            <p>wind {wind} m/s</p>
        </div>
    )
}

export default Country