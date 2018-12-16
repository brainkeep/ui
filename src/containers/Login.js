// React Redux
import React from 'react'
import { connect } from 'react-redux'

// Material UI
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';

// ActionCreators
import * as CoderActions from '../actions/CoderActions'

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

    handleLoginButtonClicked = () => event => {
        this.props.fetchCoder(this.props.coder.access_token)
    }

    render() {
        return (
            <ListItem>
                <TextField
                    id="standard-password-input"
                    label="Enter Your Pass Code"
                    type="password"
                    autoComplete="current-password"
                    onChange={this.handleChangeAccessToken()}
                    fullWidth={true}
                />
                <Button 
                    color="secondary"
                    onClick={this.handleLoginButtonClicked()}
                >
                Login
                </Button>
            </ListItem>
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

const styles = {};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login))