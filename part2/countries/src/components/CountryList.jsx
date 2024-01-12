function CountryList({countries, handleClick}) {
    return (
        <ul>
          {countries.map(x =>
            <li key={x.ccn3}> {x.name.common} <button onClick={handleClick(x)}>show</button></li>
          )}
        </ul>
    )
}

export default CountryList