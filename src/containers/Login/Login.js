import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Login from "../../components/login/Login";
import * as LoginActions from "../../actions/LoginActions";

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCoderAccessToken: text =>
      dispatch(LoginActions.changeCoderAccessToken(text)),
    fetchCoder: access_token => dispatch(LoginActions.fetchCoder(access_token))
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
