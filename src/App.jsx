// import React, { useState } from 'react';
// import './app.css'; // Make sure to import your CSS file

// const WeatherApp = () => {
//   const [city, setCity] = useState('mumbai');
//   const [weatherData, setWeatherData] = useState(null);

//   const getWeather = () => {
//     console.log(city);
//     if (city.length === 0) {
//       setWeatherData(<h3 >Please enter a city name</h3>);
//     } else {

//       const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=bf266ec499f78c9c77ceab370f7faa8b&units=metric"
//       // setCity('');
      
//       fetch(url)
//         .then((resp) => resp.json())
//         .then((data) => {
//           setWeatherData(
//             <div>
//               <h2>{data.name}</h2>
//               <h4 >{data.weather[0].main}</h4>
//               <h4 >{data.weather[0].description}</h4>
//               <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png}" alt="Weather Icon" />
//               <h1>{data.main.temp} &#176;</h1>
//               <div >
//                 <div>
//                   <h4 >min</h4>
//                   <h4 >{data.main.temp_min}&#176;</h4>
//                 </div>
//                 <div>
//                   <h4 >max</h4>
//                   <h4>{data.main.temp_max}&#176;</h4>
//                 </div>
//               </div>
//             </div>
//           );
//         })
//         .catch(() => {
//           setWeatherData(<h3 >City not found</h3>);
//         })
//     }
//   }

//   return (
//     <div >
//       <div ></div>
//       <div ></div>
//       <div >
//         <div >
//           <input
//             type="text"
//             placeholder="Enter a city name"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//           <button onClick={getWeather}>Search</button>
//         </div>
//         <div id="result">{weatherData}</div>
//       </div>
//     </div>
//   );
// };

// export default WeatherApp;


import React, { useState } from 'react';
import './app.css'; // Make sure to import your CSS file

const WeatherApp = () => {
  const [city, setCity] = useState('mumbai');
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = () => {
    console.log(city);
    if (city.length === 0) {
      setWeatherData(<h3 className="text-red-500">Please enter a city name</h3>);
    } else {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf266ec499f78c9c77ceab370f7faa8b&units=metric`
      
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setWeatherData(
            <div className="text-center">
              <h2 className="text-3xl font-semibold">{data.name}</h2>
              <h4 className="text-lg">{data.weather[0].main}</h4>
              <h4 className="text-lg">{data.weather[0].description}</h4>
              <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Weather Icon" />
              <h1 className="text-4xl mt-4">{data.main.temp} &#176;</h1>
              <div className="flex justify-around mt-4">
                <div>
                  <h4 className="text-lg text-red-500">min</h4>
                  <h4 className="text-lg">{data.main.temp_min}&#176;</h4>
                </div>
                <div>
                  <h4 className="text-lg">max</h4>
                  <h4 className="text-lg">{data.main.temp_max}&#176;</h4>
                </div>
              </div>
            </div>
          );
        })
        .catch(() => {
          setWeatherData(<h3 className="text-red-500">City not found</h3>);
        });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Enter a city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            onClick={getWeather}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Search
          </button>
          <div id="result" className="mt-6">{weatherData}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
