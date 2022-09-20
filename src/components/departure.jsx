import React from "react";
import PropTypes from "prop-types";
import ViewDetails from "./viewDetails";

export default function Departure(props) {
  const { departure } = props;

  return (
    <div className="departure">
      <div className="title">Dettaglio partenza</div>
      <ViewDetails
        airport={departure && departure.airport}
        terminal={departure && departure.terminal}
        gate={departure && departure.gate}
        timezone={departure && departure.timezone}
        scheduled={departure && departure.scheduled}
        estimated={departure && departure.estimated}
        actual={departure && departure.actual}
        runway={departure && departure.actual_runway}
      />
    </div>
  );
}

Departure.propTypes = {
  departure: PropTypes.object,
};
