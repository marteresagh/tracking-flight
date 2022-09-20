import React from "react";
import PropTypes from "prop-types";
import "../styles/error.css";

export default function NotFound(props) {
  const { error } = props;

  return (
    <section className="error">
      <div className="sheet container">
        <h1>Impossibile completare la richiesta</h1>
        <h2>Ci dispiace per il disagio!</h2>
        <div className="code">
          <p>Error code: {(error && error.code) || "N/A"}</p>
          <p>Message: {(error && error.message) || "N/A"}</p>
        </div>
      </div>
    </section>
  );
}

NotFound.propTypes = {
  error: PropTypes.object,
};
