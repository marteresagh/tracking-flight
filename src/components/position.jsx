import React, { Component } from "react";

export default class Position extends Component {
  constructor(props) {
    super(props);
  }

  getIsGround(is_ground) {
    if (is_ground === null) {
      return "N/A";
    } else if (is_ground) {
      return "A terra";
    } else {
      return "In volo";
    }
  }

  render() {
    const { live } = this.props;
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <div>Latitudine</div>
              {live && live.latitude ? live.latitude : "N/A"}
            </td>
            <td>
              <div>Longitudine</div>
              {live && live.longitude ? live.longitude : "N/A"}
            </td>
            <td>
              <div>Altitudine</div>
              {live && live.altitude ? `${live.altitude} m` : "N/A"}
            </td>
            <td>
              <div>Velocità</div>
              {live && live.speed_horizontal
                ? `${live.speed_horizontal} km/h`
                : "N/A"}
            </td>
            <td>
              <div>Posizione</div>
              {live && this.getIsGround(live.is_ground)}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
