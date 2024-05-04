import React ,{useState} from 'react'
import Navbar from './Navbar';
import axios from 'axios'


function App() {
 
  const [data, setData] = useState({});
  const [location, SetLocation] = useState('');
  const [mode , setmode] = useState('Fahrenheit');
  
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
  console.log(mode);

  const convert_to_Fahrenheit =  (temp) =>{
    return (temp * 9 / 5) + 32;
  }

  const convert_to_Celsius = (temp) =>{
    return ((temp - 32)* 5 / 9).toFixed(1);
  }
  
  const temperature_converion = () =>{
    setmode((prevMode) => (prevMode === 'Fahrenheit' ? 'Celsius' : 'Fahrenheit'));
  };
  
  const SearchLocation = (event)=>{
        if(event.key === 'Enter'){
           axios.get(url).then((response)=>{
             setData(response.data);
             console.log(response.data);
           })
           .catch((error) => {
            console.error('Error:', error);
          });
          SetLocation('');
        }
  }

  return (
    <>
      <div className="App">
       <Navbar currentstate = {mode} temperature_converion = {temperature_converion}/>
       <div className='Searchbar'> 
       <input
       value={location}
       placeholder='Enter location'
       onChange={event => SetLocation(event.target.value)}
       type='text'
       onKeyPress = {SearchLocation}
      />
      </div>
      
       <div className="container">
         <div className="top">
           <div className="location">
               <p>{data.name}</p>
           </div>
           <div className = "temp">
              {data.main  && (
              <h1>
              {mode === 'Fahrenheit'
                ? `${data.main.temp} F`
                : `${convert_to_Celsius(data.main.temp)} C`}</h1> )}
           </div>
           <div className ="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
           </div>
         </div>
         <div className="bottom">
           <div className = "feelings">
              {data.main ? (
            <p>
              {mode === 'Fahrenheit'
                ? `${data.main.feels_like} F`
                : `${convert_to_Celsius(data.main.feels_like)} C`} </p> )  : null}
              <p>Feels like</p>
           </div>
           <div className = "humidity">
              {data.main ? <p>{data.main.humidity} %</p> : null}
              <p>Humidity</p>
           </div>
           <div className ="wind">
             {data.wind ? <p>{data.wind.speed} mh</p> : null} 
              <p>Wind speed</p>
           </div>
           <div className="Maxtemp">
           {data.main ? (
            <p>
              {mode === 'Fahrenheit'
                ? `${data.main.temp_max} F`
                : `${convert_to_Celsius(data.main.temp_max)} C`} </p> )  : null}
             <p>Max Temp</p>
           </div>
           <div className="Mintemp">
           {data.main ? (
            <p>
              {mode === 'Fahrenheit'
                ? `${data.main.temp_min} F`
                : `${convert_to_Celsius(data.main.temp_min)} C`} </p> )  : null}
             <p>Min Temp</p>
           </div>
         </div>
       </div>
    </div>
  </>
  );
}

export default App;
