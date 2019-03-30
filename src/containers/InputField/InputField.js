import { connect } from "react-redux";
import * as inputField from "../../actions/inputField";
import InputField from "../../components/InputField/InputField";

const mapStateToProps = state => {
  return {
    inputField: state.inputField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeInputText: text => dispatch(inputField.changeInputText(text)),
    executeCommandBegin: () => dispatch(inputField.executeCommandBegin()),
    setCommandInvalid: () => dispatch(inputField.setCommandInvalid()),
    setCommandValid: () => dispatch(inputField.setCommandValid())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputField);
