import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';

import ReviewListComponent from '../components/ReviewListComponent'
import * as ReviewActions from '../actions/ReviewActions'

const mapStateToProps = (state) => {
  return {
    in_review_problems: state.review_list.in_review_problems,
    review_queue: state.review_list.review_queue,
    coder_info: state.coder.coder_info
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ReviewListComponent))