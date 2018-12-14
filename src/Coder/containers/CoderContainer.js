import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';

import CoderComponenet from '../components/CoderComponenet'
import * as CoderActions from '../actions/CoderActions'

const mapStateToProps = (state) => {
    return {
        coder_info: state.coder.coder_info
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCoderAccessToken: (text) => dispatch(CoderActions.changeCoderAccessToken(text)),
        fetchCoderInfo: (access_token) => dispatch(CoderActions.fetchCoderInfo(access_token))
    }
}

const styles = {};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CoderComponenet))