import React from "react";
import "./styles/App.css";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import PropTypes from "prop-types";

AppFC.propTypes = {
  login: PropTypes.object.isRequired
};

export default function AppFC(props) {
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
