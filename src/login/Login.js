// React Redux
import React from 'react';
import { connect } from 'react-redux';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import LockOpen from '@material-ui/icons/LockOpen';

// ActionCreators
import * as CoderActions from './CoderActions';

/*

██████╗ ███████╗ █████╗  ██████╗████████╗
██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝
██████╔╝█████╗  ███████║██║        ██║   
██╔══██╗██╔══╝  ██╔══██║██║        ██║   
██║  ██║███████╗██║  ██║╚██████╗   ██║   
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   
                                                            
*/

class Login extends React.Component {

    handleChangeAccessToken = () => event => {
        this.props.changeCoderAccessToken(event.target.value)
    };

    handleLoginButtonClicked = () => () => {
        const token = this.props.coder.access_token
        if (token.length >= 4) {
            this.props.fetchCoder(token);
        }
    }

    render() {
        return (

            <Dialog open={true}>
                <ListItem >

                    <TextField
                    id="standard-password-input"
                    type="password"
                    autoComplete="current-password"
                    onChange={this.handleChangeAccessToken()}
                    />

                    <IconButton 
                    color="secondary"
                    onClick={this.handleLoginButtonClicked()}
                    >
                    <LockOpen />
                    </IconButton>

                </ListItem>
            </Dialog>
        )
    }
}

/*

██████╗ ███████╗██████╗ ██╗   ██╗██╗  ██╗
██╔══██╗██╔════╝██╔══██╗██║   ██║╚██╗██╔╝
██████╔╝█████╗  ██║  ██║██║   ██║ ╚███╔╝ 
██╔══██╗██╔══╝  ██║  ██║██║   ██║ ██╔██╗ 
██║  ██║███████╗██████╔╝╚██████╔╝██╔╝ ██╗
╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝
                                         
*/

const mapStateToProps = (state) => {
    return {
        coder: state.coder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCoderAccessToken: (text) => dispatch(CoderActions.changeCoderAccessToken(text)),
        fetchCoder: (access_token) => dispatch(CoderActions.fetchCoder(access_token))
    }
}

const styles = {
    media: {
        height: 140,
    },
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));