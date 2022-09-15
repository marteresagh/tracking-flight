import React from "react";

import "../styles/footer.css";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <div className="sheet">
          <div className="footer-container">
            <div className="item">marteresa28@gmail.com</div>
            <div className="item">
              Monitora lo stato dei voli con il tracking di{" "}
              <a href="https://aviationstack.com/" target="_blank">
                aviationstack.com
              </a>
            </div>
            <div className="item">Designed by Maria Teresa Graziano</div>
          </div>
        </div>
      </footer>
    );
  }
}
