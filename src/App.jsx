import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [defaultWeather, setDefaultWeather] = useState(null);
  const [searched, setSearched] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_REACT_APP_MY_KEY}&q=Los Angeles`),
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_REACT_APP_MY_KEY}&q=Los Angeles&days=7`)
    ]).then(function (responses) {
      return Promise.all(responses.map(function (response) {
        return response.json();
      }))
    }).then(function (data) {
      console.log(data);
      setDefaultWeather(data[0]);
      setSearched(data[1]);
      console.log(defaultWeather);
      console.log(searched);
    });
  }, []);



  return (
    <>
      <div className="box">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => console.log(`${import.meta.env.REACT_APP_MY_KEY}`)}>
          count
        </button>
      </div>
    </>
  )
}

export default App
