import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import ReviewCard from '../components/review-card-component'

import * as inReviewProblemsActions from '../actions/in-review-problems-actions'
import * as reviewQueueActions from '../actions/review-queue-actions'
import * as reviewCompletionActions from '../actions/review-completion-actions'

const styles = {
  root: {
    flexGrow: 1,
  },
  card: {
    background: 'linear-gradient(45deg, #f2f2f2 30%, #808080 90%)',
    maxWidth: 300
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


const mapStateToProps = (state) => {
  return {
    in_review_problems: state.in_review_problems,
    review_queue: state.review_queue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInReviewProblems: () => dispatch(inReviewProblemsActions.fetchInReviewProblems),
    fetchReviewQueue: () => dispatch(reviewQueueActions.fetchReviewQueue),
    completeReview: (data) => dispatch(reviewCompletionActions.completeReview(data))   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ReviewCard))