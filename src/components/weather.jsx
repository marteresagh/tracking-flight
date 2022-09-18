import React, { Component } from "react";
import axios from "axios";
import iconLoading from "../images/Pulse.svg";

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
        console.log(response);
        console.log(apiResponse);
        this.setState({
          results: apiResponse,
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
    /*  this.getWeather(this.props.location); */
  }

  render() {
    /*  const { loading, result, error } = this.state; */

    const result = {
      request: {
        type: "City",
        query: "Los Angeles, Chile",
        language: "en",
        unit: "m",
      },
      location: {
        name: "Los Angeles",
        country: "Chile",
        region: "Los Lagos",
        lat: "-42.601",
        lon: "-73.489",
        timezone_id: "America/Santiago",
        localtime: "2022-09-12 10:50",
        localtime_epoch: 1662979800,
        utc_offset: "-3.0",
      },
      current: {
        observation_time: "01:50 PM",
        temperature: 8,
        weather_code: 122,
        weather_icons: [
          "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png",
        ],
        weather_descriptions: ["Overcast"],
        wind_speed: 4,
        wind_degree: 9,
        wind_dir: "N",
        pressure: 1023,
        precip: 0,
        humidity: 88,
        cloudcover: 94,
        feelslike: 8,
        uv_index: 2,
        visibility: 10,
        is_day: "yes",
      },
    };

    const current = result.current;
    const { loading } = this.state;

    return (
      <div>
        <img src={current.weather_icons} />
      </div>
    );
  }
}
