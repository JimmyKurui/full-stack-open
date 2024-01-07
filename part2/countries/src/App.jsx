import { useEffect, useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    if(search) {
      console.log('fetching...')
      
    }
  }, [search])

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        find countries
        <input type="text" value={search} onChange={handleSearch} />
      </div>
      <Content />
    </form>
    </>
  )
}

export default App
