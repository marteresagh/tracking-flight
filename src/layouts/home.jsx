import React from "react";
import "../styles/home.css";

export default function Home(props) {
  return (
    <section className="home">
      <div className="sheet">
        <div className="container">
          <h1>Traccia il tuo volo</h1>
          <p>
            Inserisci il codice ICAO del tuo volo e <br />
            controlla il meteo nell’aereoporto di arrivo
          </p>
        </div>
      </div>
    </section>
  );
}
