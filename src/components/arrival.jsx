import React, { Component } from "react";

export default class Arrival extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { arrival } = this.props;
    return (
      <div className="arrival">
        <div className="title">Dettaglio Arrivo</div>
      </div>
    );
  }
}
