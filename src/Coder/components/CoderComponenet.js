import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class CoderComponent extends React.Component {

    handleChangeAccessToken = () => event => {
        this.props.changeCoderAccessToken(event.target.value)
    };

    handleLoginButtonClicked = () => event => {
        this.props.fetchCoderInfo(this.props.coder_info.access_token)
    }
    
    render() {
        return (
            <List>
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
            </List>
        )
    }
}

export default CoderComponent