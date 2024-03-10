import React ,{usestate} from 'react'
import Navbar from './Navbar';
//import axios from 'axios'


//const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=e0261b5f20b3e6e2e41a909af65afc3b`

function App() {
  return (
    <>
      <div className="App">
       <Navbar/>
       <div className="container">
         <div className="top">
           <div className="location">
               <p>lahore</p>
           </div>
           <div className = "temp">
              <h1>65</h1>
           </div>
           <div className ="description">
              <p>cloudy</p>
           </div>
         </div>
         <div className="bottom">
           <div className = "feelings">
              <p>64</p>
              <p>Feels like</p>
           </div>
           <div className = "humidity">
              <p>20%</p>
              <p>Humidity</p>
           </div>
           <div className ="wind">
              <p>12mh</p>
              <p>Wind speed</p>
           </div>
           <div className="Maxtemp">
             <p>70</p>
             <p>Max temperature</p>
           </div>
           <div className="Mintemp">
             <p>60</p>
             <p>Min temperature</p>
           </div>
         </div>
       </div>
    </div>
  </>
  );
}

export default App;
