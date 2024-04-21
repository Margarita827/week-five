import React, { useState } from "react";

export default function WeatherTemperature(props) {
   const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preDefault();
    setUnit("celsius");
  }
   
   
   function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
   }
   

   if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          ºC | {" "}
     <a href="/" onClick={convertToFahrenheit}>
            ºF</a>
        </span>
      </div>
    );
    } else {
      return (
        <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
    <a href="/" onClick={convertToCelsius}>
            ºC
            </a>
            {" "} | ºF
      </span> 
      </div>
      );
      }
      }