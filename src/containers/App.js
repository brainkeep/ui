import { connect } from "react-redux";

import AppFC from "./AppFC";

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

export default connect(mapStateToProps)(AppFC);
