import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Login from "../../components/Login/Login";
import * as login from "../../actions/login";

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCoderAccessToken: text =>
      dispatch(login.changeCoderAccessToken(text)),
    fetchCoder: access_token => dispatch(login.fetchCoder(access_token))
  };
};

const styles = {
  media: {
    height: 140
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));
