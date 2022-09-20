import React, { Component } from "react";
import PropTypes from "prop-types";
import Weather from "./weather";
import Position from "./position";

export default class Live extends Component {
  getColorStatus = (status) => {
    let color = "";
    if (status === "active") {
      color = "blue";
    }
    if (status === "scheduled") {
      color = "orange";
    }
    if (status === "landed") {
      color = "green";
    }
    if (status === "cancelled") {
      color = "red";
    }
    if (status === "incident") {
      color = "black";
    }
    if (status === "diverted") {
      color = "yellow";
    }
    return color;
  };

  render() {
    const { airport, status, live, location } = this.props;

    return (
      <div className="live">
        <div className="title">live</div>

        <div className="container">
          <div className="status">
            <strong>Stato:</strong>&nbsp;
            <div className={`circle ${this.getColorStatus(status)}`}></div>
            &nbsp;
            {status}
          </div>
          <div>
            <strong>Meteo attuale a:</strong> {airport || "N/A"}
          </div>

          <Weather location={location} />

          <div>
            <strong>Posizione attuale dell'aereo</strong>
          </div>
          <Position
            latitude={live && live.latitude}
            longitude={live && live.longitude}
            altitude={live && live.altitude}
            speed_horizontal={live && live.speed_horizontal}
            is_ground={live && live.is_ground}
          />
        </div>
      </div>
    );
  }
}

Live.propTypes = {
  status: PropTypes.string,
  live: PropTypes.object,
  location: PropTypes.string,
  airport: PropTypes.string,
};
