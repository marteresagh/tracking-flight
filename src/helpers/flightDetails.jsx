import React, { Component } from "react";

import Weather from "./weather";

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
          <Weather location={arrival.airport} />
        </div>
      </section>
    );
  }
}
