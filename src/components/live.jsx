import React, { Component } from "react";

export default class Live extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { status, live, to } = this.props;

    return (
      <div className="live">
        <div className="title">live</div>

        <div className="container"></div>
      </div>
    );
  }
}
