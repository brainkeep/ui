import {connect} from 'react-redux';
import Layout from '../../components/Layout/Layout'

const mapStateToProps = (state) => {
  return {
    input: state.input
  };
};

export default connect(mapStateToProps)(Layout);