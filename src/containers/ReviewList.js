// React Redux
import React from 'react'
import { connect } from 'react-redux'

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// Components  
import ReviewListAppBar from '../components/ReviewListAppBar'

// ActionCreators
import * as ReviewActions from '../actions/ReviewActions'

// Containers
import Login from './Login'

class ReviewList extends React.Component {

    componentDidUpdate () {
        if (this.props.coder_info.fetched && 
            !this.props.in_review_problems.fetching && 
            !this.props.in_review_problems.fetched &&
            !this.props.review_queue.fetching && 
            !this.props.review_queue.fetched) {
            this.props.fetchInReviewProblems(this.props.coder_info.data.coder_id)
            this.props.fetchReviewQueue(this.props.coder_info.data.coder_id)
        }
    }

    processData(inReview, reviewQueue) {
        inReview.sort((a, b) => a.problem_id - b.problem_id);
        reviewQueue.sort((a, b) => a.problem_id - b.problem_id);
        var dataList = [];
        for (var i = 0; i < inReview.length; i++) {
            dataList.push(Object.assign({}, inReview[i], reviewQueue[i]));
        }
        dataList.sort((a, b) => a.review_id - b.review_id);
        return dataList;
    }

    renderListItems(dataList) {
        const { classes } = this.props;
        return dataList.map(data => {
            return (
                <div key={data.problem_id}>
                    <ListItem button >
                    
                        <ListItemText primary={data.problem_name} />

                        <Button 
                        variant="outlined" 
                        color="secondary" 
                        className={classes.button} 
                        href={data.problem_url}
                        >
                        Solve
                        </Button>

                        <Button 
                        variant="contained" 
                        color="secondary" 
                        className={classes.button} 
                        onClick={() => this.props.completeReview(data)}
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
        const inReview = this.props.in_review_problems.data;
        const reviewQueue = this.props.review_queue.data;
        if (inReview.length === 0 || reviewQueue.length === 0) {
            return (
                <List>
                    <ReviewListAppBar />
                    <Login />
                </List>
            )
        } 
        else {
            const dataList = this.processData(inReview, reviewQueue)
            return (
                <List>
                    <ReviewListAppBar />
                    {this.renderListItems(dataList)}
                </List>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        in_review_problems: state.in_review_problems,
        review_queue: state.review_queue,
        coder_info: state.coder_info
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
  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ReviewList))
