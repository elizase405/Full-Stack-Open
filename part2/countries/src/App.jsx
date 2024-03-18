import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import axios from 'axios'
import Country from "./components/Country"
import Countries from "./components/Countries"

function App() {
    const [countryName, setCountryName] = useState("0")
    const [countries, setCountries] = useState([])
    const [show, setShow] = useState(false)

    const handleChange = (event) => {
        const val = event.target.value
        const val2 = val.charAt(0).toUpperCase() + val.slice(1)
        setCountryName(val2)
    }

    const hook = () => {
        axios.get("https://studies.cs.helsinki.fi/restcountries/api/all").then(res =>  setCountries(res.data))
    }
    useEffect(hook, [])

    const filteredCountries = countries.filter(country => country.name.common.startsWith(countryName))

  return (
    <>
        <form>
            <label>find countries </label>
            <input type="text" onChange={handleChange}/>
        </form>
        {filteredCountries.length > 10
        ? <p>Too many matches, specify another filter</p>
        : filteredCountries.length == 1
        ? filteredCountries.map(country => <Country key={country.name.common} country={country}/>)
        : filteredCountries.map(country => <Countries key={country.name.common} handleShowCountry={() => setShow(!show)} country={country} show={show}/>)}
    </>
  )
}

export default App