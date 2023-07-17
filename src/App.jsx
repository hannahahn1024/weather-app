import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  Promise.all([
    fetch('http://api.weatherapi.com/v1/current.json?key=MY_KEY&q=Los Angeles'),
    fetch('http://api.weatherapi.com/v1/forecast.json?key=MY_KEY&q=Los Angeles&days=7')
  ]).then(function (responses) {
    return Promise.all(responses.map(function (response) {
      return response.json();
    }))
  }).then(function (data) {
    console.log(data);
  });



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => console.log(`${import.meta.env.REACT_APP_MY_KEY}`)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
