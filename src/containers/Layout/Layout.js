import { connect } from "react-redux";
import Layout from "../../components/layout/Layout";
import * as AddDialogActions from "../../actions/AddDialogActions";

const mapStateToProps = state => {
  return {
    input: state.input
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openDialog: () => dispatch(AddDialogActions.openDialog())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
