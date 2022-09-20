import React from "react";
import PropTypes from "prop-types";
import Loading from "../pages/loading";
import NotFound from "../pages/notFound";
import Fligths from "../pages/fligths";

export default function Tracking(props) {
  const { loading, error, results } = props;
  console.log(results);

  if (loading) {
    return <Loading />;
  } else if (results && results.data && results.data.length !== 0) {
    return <Fligths data={results} />;
  } else {
    return <NotFound error={error} />;
  }
}

Tracking.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  results: PropTypes.object,
};
