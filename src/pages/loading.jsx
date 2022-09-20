import React from "react";
import Spinner from "../components/spinner";
import "../styles/loading.css";

export default function Loading(props) {
  return (
    <section className="loading">
      <div className="sheet container">
        <Spinner />
      </div>
    </section>
  );
}
