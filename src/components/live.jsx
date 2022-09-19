import React, { Component } from "react";
import Weather from "./weather";
import Position from "./position";

export default class Live extends Component {
  constructor(props) {
    super(props);
  }

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
    const { status, live, to } = this.props;

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
            <strong>Meteo attuale a:</strong> {to || "N/A"}
          </div>

          <Weather location={to} />

          <div>
            <strong>Posizione attuale dell'aereo</strong>
          </div>
          <Position live={live} />
        </div>
      </div>
    );
  }
}
