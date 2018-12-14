import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class ReviewListAppBar extends React.Component {

    render() {
        return (
            <AppBar position="static" color="secondary">
                <Toolbar>
                <Typography variant="h6" color="inherit">
                    Review
                </Typography>
                </Toolbar>
            </AppBar>
        )
    }

}

export default ReviewListAppBar