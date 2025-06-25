import './WeatherResult.css';
function WeatherResult({Weather , hasError }){
    console.log('Weather ' , Weather);
    const temperaturas = Weather?.main;
    console.log('Temperaturas ' , temperaturas);
    if(hasError){
        return(
            <div className='location-error'>
                <p>❌Ciudad no encontrada . Intentalo con otra</p>
            </div>
        )
    }
    if(!Weather){
        return(
            <div className="weather-result">
                <p>Busca el clima de tu ciudad🌐</p>
            </div>
        )
    }
    return(
        <div className="weather-result">
            <div className="weather-info">
                <div className='weather-icon'>
                    <img src={`https://openweathermap.org/img/wn/${Weather.weather[0].icon}@2x.png`} alt="" />
                </div>
                <div className="temperature">
                    <h1>{Weather.weather[0].description.toUpperCase()}</h1>
                    <h2>{Weather.name}</h2>
                    <h1>{Math.round(Weather.main.temp)}ºC</h1>
                </div>
            </div>
            <div className="weather-details">
                <div className="temp-max">
                    <p>🔥Temperaturas maximas : {Math.round(Weather.main.temp_max)}ºC</p>
                </div>
                <div className="temp-min">
                    <p>❄️Temperaturas minimas : {Math.round(Weather.main.temp_min)}ºC</p>
                </div>
                <div className="feels-like">
                    <p>🌀Sensacion termica : {Math.round(Weather.main.feels_like)}ºC</p>
                </div>
            </div>
        </div>
    )
}
export default WeatherResult;