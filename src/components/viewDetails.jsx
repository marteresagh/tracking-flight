import React, { Component } from "react";
import moment from "moment/moment";
import "moment-timezone";

export default class ViewDetails extends Component {
  constructor(props) {
    super(props);
  }

  getTime(time, timezone) {
    if (time) {
      console.log("### time ", time, timezone);
      const date = moment(time)
        .utc()
        .format("D/MM/YYYY, HH:mm:ss");
      return date;
    } else {
      return "N/A";
    }
  }

  render() {
    const { data } = this.props;

    return (
      <div className="container">
        <div className="airport">{(data && data.airport) || "N/A"}</div>
        <div className="flex-space-around">
          <div className="item">
            <span className="key">Terminal</span>
            <span className="value">{(data && data.terminal) || "N/A"}</span>
          </div>
          <div className="item">
            <span className="key">Gate</span>
            <span className="value">{(data && data.gate) || "N/A"}</span>
          </div>
        </div>

        <div>
          <strong>Timezone:</strong> {(data && data.timezone) || "N/A"}
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <div>Programmato</div>
                {data && this.getTime(data.scheduled, data.timezone)}
              </td>
              <td>
                <div>Stimato</div>{" "}
                {data && this.getTime(data.estimated, data.timezone)}
              </td>
            </tr>
            <tr>
              <td>
                <div>Effettivo</div>{" "}
                {data && this.getTime(data.actual, data.timezone)}
              </td>
              <td>
                <div>Runway</div>{" "}
                {data && this.getTime(data.actual_runway, data.timezone)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
