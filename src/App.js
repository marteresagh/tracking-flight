import React, { Component } from "react";

import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Tracking from "./layouts/tracking";
import Home from "./layouts/home";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: {},
      intro: true,
      error: {},
      loading: false,
    };
  }

  random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  searchFlight(icaoCode) {
    this.setState({ loading: true, intro: false });

    const params = {
      access_key: `${process.env.REACT_APP_ACCESS_KEY_FLIGHT}`,
      limit: 1,
      flight_icao: icaoCode,
    };

    axios
      .get("http://api.aviationstack.com/v1/flights", { params })
      .then((response) => {
        const apiResponse = response.data;
        console.log(response);
        console.log(apiResponse);
        this.setState({
          results: apiResponse,
        });
      })
      .catch((error) => {
        const apiError = error.response;
        console.log(apiError.data.error);
        this.setState({ error: apiError.data.error });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  searchRandomFlight() {
    this.setState({ loading: true, intro: false });

    const params = {
      access_key: `${process.env.REACT_APP_ACCESS_KEY_FLIGHT}`,
      limit: 1,
      flight_status: this.random_item(["active", "scheduled", "landed"]),
      dep_iata: this.random_item(["FCO", "LAX"]),
      max_delay_arr: 60,
    };

    axios
      .get("http://api.aviationstack.com/v1/flights", { params })
      .then((response) => {
        console.log(response);
        const apiResponse = response.data;
        this.setState({
          results: apiResponse,
        });
      })
      .catch((error) => {
        console.log(error);
        const apiError = error.response;
        this.setState({ error: apiError.data.error });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  backHome() {
    this.setState({ loading: false, intro: true });
  }

  render() {
    return (
      <React.Fragment>
        <Header
          onBack={this.backHome.bind(this)}
          onSearch={this.searchFlight.bind(this)}
          onRandom={this.searchRandomFlight.bind(this)}
        />
        <div>
          {this.state.intro ? (
            <Home />
          ) : (
            <Tracking
              loading={this.state.loading}
              results={this.state.results}
              error={this.state.error}
            />
          )}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
