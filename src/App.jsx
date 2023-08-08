import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [tempUnits, setTempUnits] = useState(true);

  
  useEffect(() => {
    try {
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_REACT_APP_MY_KEY}&q=Los Angeles&days=7`)
        .then(res => res.json())
        .then( res => {
          setWeather(res);
          setIsLoading(false);
        })   
      } catch (error) {
        console.log(error);
      }
  }, []);

  function changeUnits() {
    if(tempUnits) {
      setTempUnits(false);
    } else {
      setTempUnits(true);
    }
  }

  return (
    <>
    <button 
      className='bg-blue-900 rounded-lg text-white p-1 flex flex-col justify-start'
      onClick={() => {
        changeUnits();
        console.log(tempUnits);
      }}
      >°F/°C
    </button> 
      <div className="flex justify-center bg-slate-50 border-4 border-gray-400 w-1/2">
        
        {console.log(weather)}
        {
          isLoading
          ?
          <h1> Loading... </h1>
          :
          <div>
            
            <h1 className='font-bold'>Today</h1>
            <h1>{weather.location.name}, {weather.location.region}</h1>
            {
              tempUnits
              ?
              <h2>{weather.current.feelslike_f}°F</h2>
              :
              <h2>{weather.current.feelslike_c}°C</h2>
            }
            
            <h3>{weather.current.condition.text} @ {weather.current.last_updated}</h3>
            <img className="mx-auto" src={weather.current.condition.icon} />
          </div>
        }

      </div>

        <div className="flex justify-center bg-slate-50 border-4 border-gray-400 w-1/2">
        {
        isLoading
          ?
          <h1> Loading... </h1>
          :
          <div>
            <div className=''>
            <h1 className='font-bold'>3-day Forecast</h1>
            <h1>{weather.forecast.forecastday[0].date}</h1>
            {
              tempUnits
              ?
              <h1>{weather.forecast.forecastday[0].day.maxtemp_f}°F / {weather.forecast.forecastday[0].day.mintemp_f}°F</h1>
              :
              <h1>{weather.forecast.forecastday[0].day.maxtemp_c}°C / {weather.forecast.forecastday[0].day.mintemp_c}°C</h1>
            } 
            <h1>Humidity: {weather.forecast.forecastday[0].day.avghumidity}%</h1>
            <h1>Max Wind Speed: {weather.forecast.forecastday[0].day.maxwind_mph} mph</h1>
            <img className="mx-auto" src={weather.forecast.forecastday[0].day.condition.icon} />
            </div>
           
            <div>
              <h1>{weather.forecast.forecastday[1].date}</h1>
              {
              tempUnits
              ?
              <h1>{weather.forecast.forecastday[1].day.maxtemp_f}°F / {weather.forecast.forecastday[1].day.mintemp_f}°F</h1>
              :
              <h1>{weather.forecast.forecastday[1].day.maxtemp_c}°C / {weather.forecast.forecastday[1].day.mintemp_c}°C</h1>
            } 
              <h1>Humidity: {weather.forecast.forecastday[1].day.avghumidity}%</h1>
              <h1>Max Wind Speed: {weather.forecast.forecastday[1].day.maxwind_mph} mph</h1>
              <img className="mx-auto" src={weather.forecast.forecastday[1].day.condition.icon} />
            </div>

            <div>
              <h1>{weather.forecast.forecastday[2].date}</h1>
              {
              tempUnits
              ?
              <h1>{weather.forecast.forecastday[2].day.maxtemp_f}°F / {weather.forecast.forecastday[2].day.mintemp_f}°F</h1>
              :
              <h1>{weather.forecast.forecastday[2].day.maxtemp_c}°C / {weather.forecast.forecastday[2].day.mintemp_c}°C</h1>
              } 
              <h1>Humidity: {weather.forecast.forecastday[2].day.avghumidity}%</h1>
              <h1>Max Wind Speed: {weather.forecast.forecastday[2].day.maxwind_mph} mph</h1>
              <img className="mx-auto" src={weather.forecast.forecastday[2].day.condition.icon} />
            </div>

          

          </div>
          
        }

  
      </div>
    </>
  )
}

export default App
