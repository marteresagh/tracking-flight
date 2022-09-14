import React, { Component } from "react";
import axios from "axios";

import Header from "./components/header";
import Footer from "./components/footer";

class App extends Component {
  call_api() {
    const params = {
      access_key: "2eb415d8f5376a96441cc4cc81f3b5ae",
      limit: 10,
    };

    axios
      .get("http://api.aviationstack.com/v1/flights", { params })
      .then((response) => {
        const apiResponse = response.data;
        console.log(apiResponse);
      })
      .catch((error) => {
        const apiError = error.response;
        console.log(apiError.data.error);
      });
  }

  render() {
    return (
      /* Component
       * HEADER
       * BODY
       * FOOTER
       */
      <React.Fragment>
        <Header />
        <div style={{ height: "100vh" }}>
          CLICK ME
          <button onClick={this.call_api}>call api</button>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
