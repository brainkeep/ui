import { connect } from "react-redux";
import Layout from "../../components/Layout/Layout";
import * as addDialog from "../../actions/addDialog";

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
)(Layout);
