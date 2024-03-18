import Country from "./Country"

const Countries = ( { country, handleShowCountry, show } ) => {
    let buttonName;
    show == true ? buttonName="close" : buttonName="show"
    return (
        <div>
            <p style={{display: "inline-block"}}>{country.name.common}</p>
            <button onClick={handleShowCountry}>{buttonName}</button>
            {show && <Country country={country}/>}
        </div>
    )
}

export default Countries;