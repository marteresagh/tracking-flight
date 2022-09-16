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
      results: [],
      intro: false,
      error: [],
      loading: false,
    };
  }

  searchFlight(icaoCode) {
    this.setState({ loading: true, intro: false });

    const params = {
      access_key: "2eb415d8f5376a96441cc4cc81f3b5ae",
      limit: 10,
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

  backHome() {
    this.setState({ loading: false, intro: true });
  }

  render() {
    return (
      <React.Fragment>
        <Header
          onBack={this.backHome.bind(this)}
          onSearch={this.searchFlight.bind(this)}
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
