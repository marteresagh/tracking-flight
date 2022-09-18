import React, { Component } from "react";

export default class Name extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { flight, airline, aircraft } = this.props;
    return (
      <div className="name">
        <div>
          <span className="icao">{(flight && flight.icao) || "-"}/</span>
          <span className="iata">{(flight && flight.iata) || "-"}</span>
        </div>
        <div>Compagnia aerea: {(airline && airline.name) || "N/A"}</div>
        <div>Aereo: {(aircraft && aircraft.registration) || "N/A"}</div>
      </div>
    );
  }
}
