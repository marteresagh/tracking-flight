import React from "react";
import "../styles/footer.css";

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="sheet">
        <div className="footer-container">
          <div className="item">marteresa28@gmail.com</div>
          <div className="item">
            Monitora lo stato dei voli con il tracking di&nbsp;
            <a
              href="https://aviationstack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              aviationstack.com
            </a>
            <br />e controlla il meteo con i servizi di&nbsp;
            <a
              href="https://weatherstack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              weatherstack.com
            </a>
          </div>
          <div className="item">Designed by Maria Teresa Graziano</div>
        </div>
      </div>
    </footer>
  );
}
