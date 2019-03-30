import { connect } from "react-redux";
import * as InputActions from "../../actions/InputActions";
import InputField from "../../components/InputField/InputField";

const mapStateToProps = state => {
  return {
    input: state.input
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeInputText: text => dispatch(InputActions.changeInputText(text)),
    executeCommandBegin: () => dispatch(InputActions.executeCommandBegin()),
    setCommandInvalid: () => dispatch(InputActions.setCommandInvalid()),
    setCommandValid: () => dispatch(InputActions.setCommandValid())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputField);
