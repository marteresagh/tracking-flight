import React, { Component } from "react";

import "../styles/error.css";

export default class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { error } = this.props;

    return (
      <section className="error">
        <div className="sheet container">
          <h1>Impossibile completare la richiesta</h1>
          <h2>Ci dispiace per il disagio!</h2>
          <div className="code">
            <p>Error code: {error.code}</p>
            <p>Message: {error.message}</p>
          </div>
        </div>
      </section>
    );
  }
}
