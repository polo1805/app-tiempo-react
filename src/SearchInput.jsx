import { useState } from "react"
import './SearchInput.css'
function SearchInput({ SetCity , SetWeather , setHasError}){
    const [input , setInput]= useState("");
    const handlerSearch = async ()=>{
        const API_KEY = "4395e7735f1eb67c4bb897c527cb97ea";
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${input}&units=metric&lang=es`);
        if(!res.ok){
            setHasError(true);
            SetWeather(null);
            SetCity(input);
            return;
        }
        const data = await res.json();
        SetCity(input);
        SetWeather(data);
        setHasError(false);
    }
    return(
        <div className="search-container">
            <div className="title">
                <h1>App del Tiempo</h1>
            </div>
            <div className = "search-input">
                <input 
                    type="text"
                    value={input} 
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Escribe una ciudad"
                />
                <button onClick={handlerSearch}>
                    Buscar🔎
                </button>
            </div>
            <div className="descriptionAPI">
                <p>💻Los datos obtenidos de esta aplicacion provienen de la API de <a href="https://openweathermap.org/">OpenWeatherMap</a></p>
            </div>
        </div>
        )
}

export default SearchInput;