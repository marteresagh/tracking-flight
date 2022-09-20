import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/header.css";

import Logo from "../images/logo.svg";
import Search from "../images/search.svg";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };
  }

  changeText(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ricerca volo con codice", this.state.query);
    this.props.onSearch(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <header className="header">
        <div className="sheet">
          <div className="header-container">
            <div className="item">
              <img
                onClick={this.props.onBack}
                src={Logo}
                className="logo-image"
                alt="brand"
              />
            </div>
            <div className="item">
              <form className="form-group" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  className=""
                  placeholder="Inserisci codice ICAO"
                  value={this.state.query || ""}
                  onChange={this.changeText.bind(this)}
                  required
                />
                <button className="btn-search" type="submit" id="submit">
                  <img src={Search} className="btn-search" alt="search" />
                </button>
              </form>
            </div>
            <div className="item">
              <button className="btn-random" onClick={this.props.onRandom}>
                Visualizza un volo
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  onBack: PropTypes.func,
  onSearch: PropTypes.func,
  onRandom: PropTypes.func,
};
