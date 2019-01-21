// React Redux
import React from 'react';
import { connect } from 'react-redux';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AddBox from '@material-ui/icons/AddBox';

// ActionCreators
import * as AppBarStatusActions from './AppBarStatusActions';
import * as NewProblemActions from './NewProblemActions';

// Containers
import Stats from './Stats';

/*

██████╗ ███████╗ █████╗  ██████╗████████╗
██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝
██████╔╝█████╗  ███████║██║        ██║   
██╔══██╗██╔══╝  ██╔══██║██║        ██║   
██║  ██║███████╗██║  ██║╚██████╗   ██║   
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   
                                                            
*/

class HeaderAppBar extends React.Component {

    handleChangeProblemName = () => event => {
        this.props.changeNewProblemName(event.target.value);
    };

    handleChangeProblemUrl = () => event => {
        this.props.changeNewProblemUrl(event.target.value);
    };

    handleSaveButtonClicked = () => event => {
        const coder_id = this.props.coder_id;
        const problem_name = this.props.new_problem.problem_name;
        const problem_url = this.props.new_problem.problem_url;
        const shouldSaveNewProblem = coder_id !== -1 && 
                                    problem_name.length > 0 && 
                                    problem_url.length > 10;

        if (shouldSaveNewProblem) {
            this.props.saveNewProblem(coder_id, problem_name, problem_url);
        } 
    };

    handleClickOpenDialog = () => {
        this.props.openDialog();
    };
    
    handleCloseDialog = () => {
        this.props.closeDialog();
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.grow}>
                        brainkeep
                        </Typography>
                        <Stats />
                        <IconButton 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="Menu" 
                        onClick={this.handleClickOpenDialog}
                        >
                        
                            <AddBox />
                        </IconButton>
                        {/* <Button color="inherit" onClick={this.handleClickOpenDialog}>╋</Button> */}
                    </Toolbar>
                </AppBar>

                <Dialog
                open={this.props.appbar_status.dialog_open}
                onClose={this.handleCloseDialog}
                aria-labelledby="form-dialog-title"
                >

                    <DialogTitle id="form-dialog-title">New Problem</DialogTitle>
                
                    <DialogContent>

                        <DialogContentText>
                        "A dream doesn't become reality through magic; it takes sweat, determination and hard work." - Colin Powell
                        </DialogContentText>

                        <TextField
                        autoFocus
                        margin="normal"
                        label="Problem Name"
                        onChange={this.handleChangeProblemName()}
                        fullWidth
                        />

                        <TextField
                        autoFocus
                        margin="normal"
                        label="Problem Url"
                        onChange={this.handleChangeProblemUrl()}
                        fullWidth
                        />

                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleCloseDialog} color="secondary">
                        Cancel
                        </Button>
                        <Button onClick={this.handleSaveButtonClicked()} color="secondary">
                        Save
                        </Button>
                    </DialogActions>

                </Dialog>
            </div>
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
        appbar_status: state.appbar_status,
        new_problem: state.new_problem,
        coder_id: state.coder.data.coder_id
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        openDialog: () => dispatch(AppBarStatusActions.openAppBarDialog()),
        closeDialog: () => dispatch(AppBarStatusActions.closeAppBarDialog()),
        changeNewProblemName: (text) => dispatch(NewProblemActions.changeNewProblemName(text)),
        changeNewProblemUrl: (text) => dispatch(NewProblemActions.changeNewProblemUrl(text)),
        saveNewProblem: (coder_id, problem_name, problem_url) => dispatch(NewProblemActions.saveNewProblem(coder_id, problem_name, problem_url))
    }
}

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HeaderAppBar));