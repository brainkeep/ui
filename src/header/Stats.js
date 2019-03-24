// React Redux
import React from 'react';
import {connect} from 'react-redux';
// Material UI
import {withStyles} from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Assessment from '@material-ui/icons/Assessment';
// ActionCreators
import * as ProblemsActions from './ProblemsActions';
import * as AppBarStatusActions from './AppBarStatusActions';

/*

██████╗ ███████╗ █████╗  ██████╗████████╗
██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝
██████╔╝█████╗  ███████║██║        ██║   
██╔══██╗██╔══╝  ██╔══██║██║        ██║   
██║  ██║███████╗██║  ██║╚██████╗   ██║   
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   
                                                            
*/

class Stats extends React.Component {

  componentDidMount() {
    this.props.fetchProblems(this.props.coder_id);
  }

  toggleBottomDrawerOpen = () => () => {
    this.props.openStatsDrawer();
  };

  toggleBottomDrawerClose = () => () => {
    this.props.closeStatsDrawer();
  };

  render() {
    const {classes} = this.props;
    const data = this.props.problems.data;
    const numProblemsSolved = 'You solved total of ' + data.length +
      ' problems.';
    const numReviews = data.map(d => d.times_solved)
                           .reduce((a, b) => a + b, 0) - data.length;
    const numReviewCompleted = 'You completed total of ' + numReviews +
      ' reviews.';
    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={this.toggleBottomDrawerOpen()}
        >
          <Assessment/>
        </IconButton>

        <Drawer
          anchor="bottom"
          open={this.props.stats_drawer_open}
          onClose={this.toggleBottomDrawerClose()}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleBottomDrawerClose()}
            onKeyDown={this.toggleBottomDrawerClose()}
          >
            <List>
              <ListItem>
                <ListItemText primary={numProblemsSolved}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={numReviewCompleted}/>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
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
    problems: state.problems,
    coder_id: state.coder.data.coder_id,
    stats_drawer_open: state.appbar_status.stats_drawer_open,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProblems: (coder_id) => dispatch(
      ProblemsActions.fetchProblems(coder_id)),
    openStatsDrawer: () => dispatch(AppBarStatusActions.openStatsDrawer()),
    closeStatsDrawer: () => dispatch(AppBarStatusActions.closeStatsDrawer()),
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Stats));