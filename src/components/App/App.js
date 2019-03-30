import React from "react";
import "./App.css";
import Layout from "../../containers/Layout/Layout";
import Login from "../../containers/Login/Login";

class App extends React.Component {
  render() {
    const coder = this.props.login;
    if (!coder.fetched) {
      return <Login />;
    } else {
      return (
        <div className="App">
          <Layout />
        </div>
      );
    }
  }
}

export default App;
