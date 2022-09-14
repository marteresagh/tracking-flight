import React, { Component } from "react";

import Logo from "../images/logo.svg";
import "../css/header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="sheet">
          <div className="header-container">
            <div className="item">
              <img src={Logo} className="logo-image" />
            </div>
            <div className="item">
              <form className="form-group" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  className=""
                  placeholder="Inserisci codice ICAO"
                />
                <button className="btn-search" type="submit" id="submit">
                  Cerca
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
