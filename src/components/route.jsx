import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment/moment";
import "moment-timezone";

import Plane from "../images/plane.svg";

export default class Route extends Component {
  getValue(value) {
    if (value === 0) {
      return 0;
    } else if (value) {
      return value;
    } else {
      return "N/A";
    }
  }

  getFlightTime(
    departureDate,
    departureTimezone,
    arrivalDate,
    arrivalTimezone
  ) {
    // get the zone offsets for this time, in minutes
    let depInTime = moment.tz(
      moment(departureDate)
        .utc()
        .format("YYYY-MM-DDTHH:mm:ss"),
      departureTimezone
    );
    let arrInTime = moment.tz(
      moment(arrivalDate)
        .utc()
        .format("YYYY-MM-DDTHH:mm:ss"),
      arrivalTimezone
    );

    let tempTime = moment.duration(arrInTime.diff(depInTime));

    let hours = Math.floor(tempTime.asHours());
    let mins = Math.floor(tempTime.asMinutes()) - hours * 60;
    return hours + " h " + mins + " min";
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
            <img src={Plane} className="airplane" alt="Plane" />
            <div className="total">
              <div className="middle"></div>
            </div>
          </div>

          <div className="flex-space-between">
            <div>
              <strong>Durata totale volo:</strong>&nbsp;
              {this.getFlightTime(
                departure.estimated,
                departure.timezone,
                arrival.estimated,
                arrival.timezone
              )}
            </div>
            <div>
              <strong>Ritardo sull'arrivo:</strong>&nbsp;
              {arrival && this.getValue(arrival.delay)} min
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Route.propTypes = {
  departure: PropTypes.object,
  arrival: PropTypes.object,
};
