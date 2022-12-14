import React from "react";
import "../styles/flight.css";

import Name from "../components/name";
import Route from "../components/route";
import Live from "../components/live";
import Departure from "../components/departure";
import Arrival from "../components/arrival";
import Image from "../components/image";

export default function FlightDetails(props) {
  const {
    status,
    /*date,*/
    departure,
    arrival,
    airline,
    flight,
    aircraft,
    live,
  } = props;

  const getLocation = (arrival) => {
    if (arrival && arrival.timezone) {
      let array = arrival.timezone.split("/");
      return array[array.length - 1];
    }
  };

  return (
    <section className="flight">
      <div className="sheet grid-container">
        <Name flight={flight} airline={airline} aircraft={aircraft} />
        <Route departure={departure} arrival={arrival} />
        <Live
          airport={arrival && arrival.airport}
          status={status}
          live={live}
          location={getLocation(arrival)}
        />
        <Departure departure={departure} />
        <Image />
        <Arrival arrival={arrival} />
      </div>
    </section>
  );
}
