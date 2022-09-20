import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import iconLoading from "../images/pulse.svg";

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      error: [],
      loading: false,
    };
  }

  getWeather(location) {
    this.setState({ loading: true });

    const params = {
      access_key: `${process.env.REACT_APP_ACCESS_KEY_WEATHER}`,
      query: location,
    };

    axios
      .get("http://api.weatherstack.com/current", { params })
      .then((response) => {
        const apiResponse = response.data;
        console.log(apiResponse);
        this.setState({
          result: apiResponse,
        });
      })
      .catch((error) => {
        this.setState({ error: error });
        console.log(error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  getValue(value) {
    if (value === 0) {
      return 0;
    } else if (value) {
      return value;
    }
    return "N/A";
  }

  getLoading() {
    return <img width="32px" src={iconLoading} alt="loading" />;
  }

  componentDidMount() {
    this.getWeather(this.props.location);
  }

  render() {
    const { loading, result /* error */ } = this.state;

    if (loading) {
      return (
        <table>
          <tbody>
            <tr>
              <td>{this.getLoading()}</td>
              <td>
                <div>Vento</div>
                {this.getLoading()}
              </td>
              <td>
                <div>Umidità</div>
                {this.getLoading()}
              </td>
              <td>
                <div>Temperatura</div>
                {this.getLoading()}
              </td>
              <td>
                <div>Precipitazioni</div>
                {this.getLoading()}
              </td>
            </tr>
          </tbody>
        </table>
      );
    } else {
      return (
        <table>
          <tbody>
            <tr>
              <td>
                {result && result.current && result.current.weather_icons ? (
                  <img
                    src={result.current.weather_icons}
                    className="circle-icon"
                    alt="weather icon"
                  />
                ) : (
                  "N/A"
                )}
              </td>
              <td>
                <div>Vento</div>
                {(result &&
                  result.current &&
                  `${this.getValue(result.current.wind_speed)} km/h`) ||
                  "N/A"}
              </td>
              <td>
                <div>Umidità</div>
                {(result &&
                  result.current &&
                  `${this.getValue(result.current.humidity)} %`) ||
                  "N/A"}
              </td>
              <td>
                <div>Temperatura </div>
                {(result &&
                  result.current &&
                  `${this.getValue(result.current.temperature)}`) ||
                  "N/A"}{" "}
                &#8451;
              </td>
              <td>
                <div>Precipitazioni</div>
                {(result &&
                  result.current &&
                  `${this.getValue(result.current.precip)} mm`) ||
                  "N/A"}
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  }
}

Weather.propTypes = {
  location: PropTypes.string,
};
