import React, { Component } from "react";
import ViewDetails from "./viewDetails";
export default class Arrival extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { arrival } = this.props;
    return (
      <div className="arrival">
        <div className="title">Dettaglio Arrivo</div>
        <ViewDetails data={arrival} />
      </div>
    );
  }
}
