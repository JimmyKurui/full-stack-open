function Country({country, weatherData}) {
  console.log(weatherData)
  return (
      <>
        <h2>{country.name.common}</h2>
        <div>capital - {country.capital[0]}</div>
        <div>area - {country.area}</div>
        <h3>languages</h3>
        <ul>
          {Object.entries(country.languages).map(x => 
            <li key={x[0]}>{x[1]}</li>
          )}
        </ul>
        <img className='country-flag' src={country.flags.svg} alt={country.flags} />
        <h3>weather</h3>
        <div>{weatherData.weather[0].description}</div>
        <div>temp - {weatherData.main.temp}</div>
        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].main} />
        <div>visibility - {weatherData.visibility}</div>
        <div>wind speed - {weatherData.wind.speed}, wind degree - {weatherData.wind.deg}</div>
      </>
    )
}

export default Country