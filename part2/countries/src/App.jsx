import { useEffect, useState } from "react";
import countryService from "./services/countries";
import weatherService from "./services/weather"
import Country from "./components/Country";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState({})
  const [search, setSearch] = useState('');

  const countriesSearch = countries.filter(x => x.name.common.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    console.log(countriesSearch.length)
    if(countries.length === 0) {
      countryService.getCountries().then(countries => {
        console.log('fetching...')
        setCountries(countries)
      })
      .catch(err => console.log(err))
    }
    if(countriesSearch.length === 1) {
      console.log('fetching filter...')
      showWeather(countriesSearch[0].latlng)
    }
    return () => setWeather({})
  }, [countriesSearch.length]);

  const handleSearch = (e) => setSearch(e.target.value)
  const handleShowCountry = (x) => () => setSearch(x.name.common)

  const showWeather = ([lat, long]) => {
    console.log('fetching weather...')
    weatherService.getWeather(lat, long)
      .then(data => setWeather(data))
      .catch(err => console.log(err))
  }
    
  const displayContent = () => {
    // const countriesSearch = countries.filter(x => x.name.common.toLowerCase().includes(search.toLowerCase()))
    if (countries.length === 0 || search.length === 0) {
      return null
    } else if (countriesSearch.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (countriesSearch.length === 1 && Object.keys(weather).length !== 0) {
      return <Country country={countriesSearch[0]} weatherData={weather} />
    } else {
      return <CountryList countries={countriesSearch} handleClick={handleShowCountry}/>
    }
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          find countries
          <input type="text" value={search} onChange={handleSearch} />
        </div>
        <div className="content">{displayContent()}</div>
      </form>
    </>
  )
}

export default App;
