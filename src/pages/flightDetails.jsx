import React, { Component } from "react";
import "../styles/flight_details.css";

import Name from "../components/name";
import Route from "../components/route";
import Live from "../components/live";
import Departure from "../components/departure";
import Arrival from "../components/arrival";
import Image from "../components/image";

export default class FlightDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      status,
      date,
      departure,
      arrival,
      airline,
      flight,
      aircraft,
      live,
    } = this.props;

    return (
      <section className="flight">
        <div className="sheet grid-container">
          <Name flight={flight} airline={airline} aircraft={aircraft} />
          <Route departure={departure} arrival={arrival} />
          <Live status={status} live={live} to={arrival && arrival.airport} />
          <Departure departure={departure} />
          <Image />
          <Arrival arrival={arrival} />
        </div>
      </section>
    );
  }
}
