import {connect} from 'react-redux';
import App from '../../components/App/App'

const mapStateToProps = (state) => {
  return {
    login: state.login
  };
};

export default connect(mapStateToProps)(App);