import React, { Component } from "react";
import FlightDetails from "../helpers/flightDetails";

export default class Fligths extends Component {
  constructor(props) {
    super(props);

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey() {
    return this.keyCount++;
  }

  render() {
    const dataFlights = this.props.data.data;

    console.log("##### data-fli: ", dataFlights);
    const count = dataFlights.length;

    return (
      <React.Fragment>
        {dataFlights.map((e) => (
          <FlightDetails
            key={this.getKey()}
            status={e.flight_status}
            date={e.flight_date}
            departure={e.departure}
            arrival={e.arrival}
            airline={e.airline}
            flight={e.flight}
            aircraft={e.aircraft}
            live={e.live}
          />
        ))}
      </React.Fragment>
    );
  }
}
