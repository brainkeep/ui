import { connect } from "react-redux";

import * as addDialog from "./actions/addDialog";
import LayoutFC from "./LayoutFC";

const mapStateToProps = state => {
  return {
    inputField: state.inputField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openDialog: () => dispatch(addDialog.openDialog())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutFC);
