import React, { Component } from "react";

export default class Tracking extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loading, error, results } = this.props;

    const data_test = {
      pagination: {
        limit: 100,
        offset: 0,
        count: 2,
        total: 2,
      },
      data: [
        {
          flight_date: "2022-09-06",
          flight_status: "active",
          departure: {
            airport: "Leonardo Da Vinci (Fiumicino)",
            timezone: "Europe/Rome",
            iata: "FCO",
            icao: "LIRF",
            terminal: "3",
            gate: "E11",
            delay: null,
            scheduled: "2022-09-06T09:15:00+00:00",
            estimated: "2022-09-06T09:15:00+00:00",
            actual: null,
            estimated_runway: null,
            actual_runway: null,
          },
          arrival: {
            airport: "Los Angeles International",
            timezone: "America/Los_Angeles",
            iata: "LAX",
            icao: "KLAX",
            terminal: "TBIT",
            gate: null,
            baggage: null,
            delay: null,
            scheduled: "2022-09-06T13:15:00+00:00",
            estimated: "2022-09-06T13:15:00+00:00",
            actual: null,
            estimated_runway: null,
            actual_runway: null,
          },
          airline: {
            name: "ITA Airways",
            iata: "AZ",
            icao: "ITY",
          },
          flight: {
            number: "620",
            iata: "AZ620",
            icao: "ITY620",
            codeshared: null,
          },
          aircraft: null,
          live: null,
        },
        /*  {
          flight_date: "2022-09-05",
          flight_status: "landed",
          departure: {
            airport: "Leonardo Da Vinci (Fiumicino)",
            timezone: "Europe/Rome",
            iata: "FCO",
            icao: "LIRF",
            terminal: "3",
            gate: "E23",
            delay: 18,
            scheduled: "2022-09-05T09:15:00+00:00",
            estimated: "2022-09-05T09:15:00+00:00",
            actual: "2022-09-05T09:33:00+00:00",
            estimated_runway: "2022-09-05T09:33:00+00:00",
            actual_runway: "2022-09-05T09:33:00+00:00",
          },
          arrival: {
            airport: "Los Angeles International",
            timezone: "America/Los_Angeles",
            iata: "LAX",
            icao: "KLAX",
            terminal: "B",
            gate: null,
            baggage: null,
            delay: null,
            scheduled: "2022-09-05T13:15:00+00:00",
            estimated: "2022-09-05T13:15:00+00:00",
            actual: "2022-09-05T12:09:00+00:00",
            estimated_runway: "2022-09-05T12:09:00+00:00",
            actual_runway: "2022-09-05T12:09:00+00:00",
          },
          airline: {
            name: "ITA Airways",
            iata: "AZ",
            icao: "ITY",
          },
          flight: {
            number: "620",
            iata: "AZ620",
            icao: "ITY620",
            codeshared: null,
          },
          aircraft: {
            registration: "EI-IFB",
            iata: "A359",
            icao: "A359",
            icao24: "4CAD45",
          },
          live: null,
        }, */
      ],
    };

    const error_test = {
      code: "validation_error",
      message: "Request failed with validation error",
      context: {
        flight_date: [
          {
            key: "invalid_flight_date",
            message:
              "The flight date must be a valid date in the format YYYY-MM-DD.",
          },
        ],
      },
    };

    return <React.Fragment></React.Fragment>;
  }
}