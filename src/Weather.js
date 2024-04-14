import React from "react";
import "./Weather.css";

export default function Weather() {
   return (
     <div className="Weather">
       <form>
         <div className="row">
           <div className="col-9">
             <input
               type="search"
               placeholder="Enter a city..."
               className="formControl"
               autoFocus="on"
             />
           </div>
           <div className="col-3">
             <input
               type="submit"
               value="Search"
               className="btn btn-primary w-100"
             />
           </div>
         </div>
       </form>
       <h3>Lisbon</h3>
       <ul>
         <li>Wednesday 07:00</li>
         <li>Mostly sunny</li>
       </ul>
       <div className="row mt-3">
         <div className="col-6">
           <div className="clearfix">
             <img
               src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
               alt="Mostly sunny"
               className="float-left"
             />
             <div className="float-left">
               <span className="temperature">18</span>
               <span className="unit">ºC</span>
             </div>
           </div>
         </div>
         <div className="col-6">
           <ul>
             <li>Precipitacion:1%</li>
             <li>Humidity:56%</li>
             <li>Wind:9mph</li>
           </ul>
         </div>
       </div>
     </div>
   ); 
}