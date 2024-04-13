import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
     
        <Weather />
        <footer>
          This project has been coded by Margarita Ibanez and is{" "}
          <a
            href="https://github.com/Margarita827/week-five"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
