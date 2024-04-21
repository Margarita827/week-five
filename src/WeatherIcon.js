import React from "react";

export default function WeatherIcon(props) {
 const codeMapping = {
   "01d": "CLEAR_DAY",
   "01n": "CLEAR_NIGHT",
   "02d": "few clouds",
   "02n": "few clouds",
   "03d": "scattered clouds",
   "03n": "scattered clouds",
   "04d": "broken clouds",
   "04n": "broken clouds",
   "09d": "shower rain",
   "09n": "shower rain",
   "010d": "rain",
   "010n": "rain",
   "011d": "thunderstorm",
   "011n": "thunderstorm",
   "013d": "snow",
   "013n": "snow",
   "050d": "mist",
   "050n": "mist",
 };
 };
 
 

 return (
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      />
    );





//    <img
     //   src="http://darkskyapp.github.io/skycons/import ReactAnimatedWeather from 'react-animated-weather';"
     //   alt={props.alt}
     // />
