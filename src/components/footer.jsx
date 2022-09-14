import React, { Component } from "react";

import Logo from "../images/logo.svg";
import "../css/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="sheet">
          <div className="footer-container">
            <div className="item">Monitora il tuo volo con avionstack.com</div>
            <div className="item">Designed by Maria Teresa Graziano</div>
          </div>
        </div>
      </footer>
    );
  }
}
