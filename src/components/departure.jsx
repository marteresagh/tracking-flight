import React, { Component } from "react";

export default class Departure extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { departure } = this.props;

    return (
      <div className="departure">
        <div className="title">Dettaglio partenza</div>
      </div>
    );
  }
}
