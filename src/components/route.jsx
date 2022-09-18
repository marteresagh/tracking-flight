import React, { Component } from "react";
import Plane from "../images/plane.svg";

export default class Route extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { departure, arrival } = this.props;
    return (
      <div className="route">
        <div className="title">Rotta</div>
        <div className="container">
          <div className="flex-space-between">
            <div className="from">
              <p className="code">{(departure && departure.iata) || "N/A"}</p>
              <p>
                <strong>Aereoporto:</strong>&nbsp;
                {(departure && departure.airport) || "N/A"}
              </p>
            </div>
            <div className="to">
              <p className="code">{(arrival && arrival.iata) || "N/A"}</p>
              <p>
                <strong>Aereoporto:</strong>&nbsp;
                {(arrival && arrival.airport) || "N/A"}
              </p>
            </div>
          </div>

          <div className="progress-bar">
            <img src={Plane} className="airplane" />
            <div class="total">
              <div class="middle"></div>
            </div>
          </div>

          <div className="flex-space-between">
            <div>Durata totale volo: TODO 9 ore</div>
            <div>Ritardo: TODO +15 minuti</div>
          </div>
        </div>
      </div>
    );
  }
}
