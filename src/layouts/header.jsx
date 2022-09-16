import React, { Component } from "react";

import Logo from "../images/logo.svg";
import Search from "../images/search.svg";

import "../styles/header.css";

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
    e.currentTarget.reset();
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
                />
                <button className="btn-search" type="submit" id="submit">
                  <img src={Search} className="btn-search" />
                </button>
              </form>
            </div>
            <div className="item">
              <button
                className="btn-random"
                onClick={() => {
                  console.log("Sto cliccando"); /* Manca la nuova API */
                }}
              >
                Visualizza volo attivo
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
