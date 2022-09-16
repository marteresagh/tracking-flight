import React, { Component } from "react";

import Spinner from "../helpers/icon_loading";

import "../styles/loading.css";

export default class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="loading">
        <div className="sheet container">
          <Spinner />
        </div>
      </section>
    );
  }
}
