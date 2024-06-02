import React, { useState } from 'react'
import './styles/AppClima.css'

export const AppClima = () => {

    const [dataClima, setdataClima] = useState(null)
    const [ciudad, setCiudad] = useState('')
    
    const urlBase = 'https://api.openweathermap.org/data/2.5/weather' 
    const api_key = '9e8758c8c1e9d4beeab9dbc94bc84f8c';
    const diferennciaKelvin = 273.15

 
    const fetchDataClima = async () => {
        try {
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
            const data = await response.json()
            setdataClima(data)
        } catch (error) {
            console.error('Error al obtener datos meteorológicos')
            
        }
    };

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Previene la actualizacián de la página
        fetchDataClima();
    };

    

    return (

        <div className='container'>
            <h1>Aplicación del Clima</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={ciudad}
                    onChange={handleCambioCiudad}
                    placeholder='Ingrese el nombre de una ciudad'
                />
                <button type='submit'>Buscar</button>
            </form>
            {
                dataClima && (
                    <div>
                        <h2>{dataClima.name}</h2>
                        <p>Temperatura: {parseInt(dataClima?.main?.temp - diferennciaKelvin)} °C</p>
                        <p>Condición: {dataClima.weather[0]?.description}</p>
                        <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}
                            alt="Icono del clima" />
                    </div>
                )
            }
        </div>
    )
}
