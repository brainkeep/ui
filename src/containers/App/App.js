import React from 'react';

import './App.css';
import Header from '../Header/Header';
import MainGrid from '../../components/MainGrid/MainGrid';
import Login from '../review/Review';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core';

class App extends React.Component {
  render() {
    const coder = this.props.coder;
    if (!coder.fetched) {
      return (
        <Login/>
      );
    }
    else {
      return (
        <div className="App">
          <Header/>
          <MainGrid/>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    coder: state.coder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const styles = {
  button: {
    margin: 10,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));