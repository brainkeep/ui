// React Redux
import React from 'react';
import { connect } from 'react-redux';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

// ActionCreators
import * as ReviewActions from './ReviewActions';

// Containers
import Login from '../login/Login';
import HeaderAppBar from '../header/HeaderAppBar';

/*

██████╗ ███████╗ █████╗  ██████╗████████╗
██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝
██████╔╝█████╗  ███████║██║        ██║   
██╔══██╗██╔══╝  ██╔══██║██║        ██║   
██║  ██║███████╗██║  ██║╚██████╗   ██║   
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   
                                                            
*/

class Review extends React.Component {

    componentDidUpdate () {
        const shouldFetchReviewProblemsFromDB = this.props.coder.fetched && 
                                                !this.props.in_review_problems.fetching && 
                                                !this.props.in_review_problems.fetched && 
                                                !this.props.in_review_problems.fetch_error &&
                                                !this.props.review_queue.fetching && 
                                                !this.props.review_queue.fetched &&
                                                !this.props.review_queue.fetch_error;

        if (shouldFetchReviewProblemsFromDB) {
            this.props.fetchInReviewProblems(this.props.coder.data.coder_id)
            this.props.fetchReviewQueue(this.props.coder.data.coder_id)
        }
    }

    handleReviewCompletion = data => () => {
        const shouldCompleteReview = data.coder_id !== -1 &&
                                    data.review_id > 0 &&
                                    data.problem_id > 0;
                                    
        if (shouldCompleteReview) {
            this.props.completeReview(data);
        }
    }

    processData = (inReview, reviewQueue) => {
        inReview.sort((a, b) => a.problem_id - b.problem_id);
        reviewQueue.sort((a, b) => a.problem_id - b.problem_id);
        var dataList = [];
        for (var i = 0; i < inReview.length; i++) {
            dataList.push(Object.assign({}, inReview[i], reviewQueue[i]));
        }
        dataList.sort((a, b) => a.review_id - b.review_id);
        return dataList;
    }

    renderListItems = (dataList) => {
        const { classes } = this.props;
        return dataList.map(data => {
            return (
                <div key={data.problem_id}>
                    <ListItem button >
                    
                        <ListItemText primary={data.problem_name} />

                        <Button
                        className={classes.button} 
                        variant="outlined" 
                        color="secondary" 
                        href={data.problem_url}  
                        >
                        Solve
                        </Button>

                        <Button 
                        variant="contained" 
                        color="secondary" 
                        className={classes.button} 
                        onClick={this.handleReviewCompletion(data)}
                        >
                        Done
                        </Button>
                      
                    </ListItem>
                    <Divider />
                </div>
            )
        })
    }

    render() {
        const coder = this.props.coder;
        const inReview = this.props.in_review_problems.data;
        const reviewQueue = this.props.review_queue.data;
        if (!coder.fetched) {
            return (
                <Login />
            )
        } 
        else {
            const dataList = this.processData(inReview, reviewQueue)
            return (
                <div>
                <HeaderAppBar />
                <List>    
                    {this.renderListItems(dataList)}
                </List>
                </div>
            )
        }
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
        in_review_problems: state.in_review_problems,
        review_queue: state.review_queue,
        coder: state.coder
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchInReviewProblems: (coder_id) => dispatch(ReviewActions.fetchInReviewProblems(coder_id)),
        fetchReviewQueue: (coder_id) => dispatch(ReviewActions.fetchReviewQueue(coder_id)),
        completeReview: (data) => dispatch(ReviewActions.completeReview(data)) 
    }
}
  
const styles = {
    button: {
        margin: 10,
    }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Review));
