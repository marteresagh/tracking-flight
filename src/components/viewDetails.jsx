import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment/moment";
import "moment-timezone";

export default class ViewDetails extends Component {
  getTime(time) {
    if (time) {
      const date = moment(time)
        .utc()
        .format("D/MM/YYYY, HH:mm:ss");
      return date;
    } else {
      return "N/A";
    }
  }

  render() {
    const {
      airport,
      terminal,
      gate,
      timezone,
      scheduled,
      estimated,
      actual,
      runway,
    } = this.props;

    return (
      <div className="container">
        <div className="airport">{airport || "N/A"}</div>
        <div className="flex-space-around">
          <div className="item">
            <span className="key">Terminal</span>
            <span className="value">{terminal || "N/A"}</span>
          </div>
          <div className="item">
            <span className="key">Gate</span>
            <span className="value">{gate || "N/A"}</span>
          </div>
        </div>

        <div>
          <strong>Timezone:</strong> {timezone || "N/A"}
        </div>

        <table>
          <tbody>
            <tr>
              <td>
                <div>Programmato</div>
                {this.getTime(scheduled)}
              </td>
              <td>
                <div>Stimato</div>
                {this.getTime(estimated)}
              </td>
            </tr>
            <tr>
              <td>
                <div>Effettivo</div>
                {this.getTime(actual)}
              </td>
              <td>
                <div>Runway</div>
                {this.getTime(runway)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ViewDetails.propTypes = {
  airport: PropTypes.string,
  terminal: PropTypes.string,
  gate: PropTypes.string,
  timezone: PropTypes.string,
  scheduled: PropTypes.string,
  estimated: PropTypes.string,
  actual: PropTypes.string,
  runway: PropTypes.string,
};
