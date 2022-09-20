import React from "react";
import PropTypes from "prop-types";

export default function Name(props) {
  const { flight, airline, aircraft } = props;
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

Name.propTypes = {
  flight: PropTypes.object,
  airline: PropTypes.object,
  aircraft: PropTypes.object,
};
