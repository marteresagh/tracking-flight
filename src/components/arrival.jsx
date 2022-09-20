import React from "react";
import PropTypes from "prop-types";
import ViewDetails from "./viewDetails";

export default function Arrival(props) {
  const { arrival } = props;

  return (
    <div className="arrival">
      <div className="title">Dettaglio Arrivo</div>
      <ViewDetails
        airport={arrival.airport}
        terminal={arrival.terminal}
        gate={arrival.gate}
        timezone={arrival.timezone}
        scheduled={arrival.scheduled}
        estimated={arrival.estimated}
        actual={arrival.actual}
        runway={arrival.actual_runway}
      />
    </div>
  );
}

Arrival.propTypes = {
  arrival: PropTypes.object,
};
