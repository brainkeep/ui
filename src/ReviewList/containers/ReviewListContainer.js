import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';

import ReviewListComponent from '../components/ReviewListComponent'
import * as ReviewActions from '../actions/ReviewActions'

const mapStateToProps = (state) => {
  return {
    in_review_problems: state.review_list.in_review_problems,
    review_queue: state.review_list.review_queue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInReviewProblems: () => dispatch(ReviewActions.fetchInReviewProblems),
    fetchReviewQueue: () => dispatch(ReviewActions.fetchReviewQueue),
    completeReview: (data) => dispatch(ReviewActions.completeReview(data))   
  }
}

const styles = {};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ReviewListComponent))