import { useState } from 'react'
import SearchInput from './SearchInput'
import WeatherResult from './WeatherResult';
import './App.css'

function App() {
  const [city , setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [hasError, setHasError] = useState(false);
  return (
    <>
      <SearchInput SetCity = {setCity} SetWeather = {setWeather} setHasError={setHasError}></SearchInput>
      <WeatherResult Weather={weather} hasError={hasError}></WeatherResult>
    </>
  )
}

export default App
