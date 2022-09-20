import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Position extends Component {
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
    const {
      latitude,
      longitude,
      altitude,
      speed_horizontal,
      is_ground,
    } = this.props;

    return (
      <table>
        <tbody>
          <tr>
            <td>
              <div>Latitudine</div>
              {latitude || "N/A"}
            </td>
            <td>
              <div>Longitudine</div>
              {longitude || "N/A"}
            </td>
            <td>
              <div>Altitudine</div>
              {altitude ? `${altitude} m` : "N/A"}
            </td>
            <td>
              <div>Velocità</div>
              {speed_horizontal ? `${speed_horizontal} km/h` : "N/A"}
            </td>
            <td>
              <div>Posizione</div>
              {this.getIsGround(is_ground) || "N/A"}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

Position.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  altitude: PropTypes.number,
  speed_horizontal: PropTypes.number,
  is_ground: PropTypes.bool,
};
