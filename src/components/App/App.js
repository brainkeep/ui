import React from "react";
import "./App.css";
import Layout from "../../containers/Layout/Layout";
import Login from "../../containers/Login/Login";
import PropTypes from "prop-types";

App.propTypes = {
  login: PropTypes.object.isRequired
};

export default function App(props) {
  const { login } = props;

  if (!login.fetched) {
    return <Login />;
  } else {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}
