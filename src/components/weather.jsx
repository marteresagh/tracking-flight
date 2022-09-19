import React, { Component } from "react";
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
      access_key: "64237b352aedd75e0722d113b598aa72",
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
    } else {
      return "N/A";
    }
  }

  getLoading() {
    return <img width="32px" src={iconLoading} />;
  }

  componentDidMount() {
    console.log(this.props.location);
    this.getWeather(this.props.location);
  }

  render() {
    const { loading, result, error } = this.state;
    const current = result.current;
    console.log("##current", current);

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
                {current && current.weather_icons ? (
                  <img src={current.weather_icons} className="circle-icon" />
                ) : (
                  "N/A"
                )}
              </td>
              <td>
                <div>Vento</div>
                {current && `${this.getValue(current.wind_speed)} km/h`}
              </td>
              <td>
                <div>Umidità</div>
                {current && `${this.getValue(current.humidity)} %`}
              </td>
              <td>
                <div>Temperatura </div>
                {current && `${this.getValue(current.temperature)}`} &#8451;
              </td>
              <td>
                <div>Precipitazioni</div>
                {current && `${this.getValue(current.precip)} mm`}
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  }
}
