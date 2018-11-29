import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as inReviewProblemsActions from '../actions/in-review-problems-actions'
import * as reviewQueueActions from '../actions/review-queue-actions'

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  card: {
    background: 'linear-gradient(45deg, #80ffe5 30%, #00ffcc 90%)',
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

class ReviewCard extends React.Component {

  componentWillMount () {
    this.props.fetchInReviewProblems()
    this.props.reviewQueueActions()
  }

  
  renderReviewCards() {
    const { classes } = this.props;

    return this.props.in_review_problems.data.map(problem => {
      return (
        <Grid key={problem.problem_id} item>
          <Paper>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  problem_id: {problem.problem_id}, times_solved: {problem.times_solved} 
                </Typography>
                <Typography variant="h5" component="h2">
                  {problem.problem_name}
                </Typography>
                <Typography component="p">
                <a href={problem.problem_url}>Begin Solving Problem</a>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Complete Review</Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
      )
    })
  }

  render() {
    const { classes } = this.props;
    const spacing = 16;
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={Number(spacing)}>
            {this.renderReviewCards()}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    in_review_problems: state.in_review_problems,
    review_queue: state.review_queue
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchInReviewProblems: () => inReviewProblemsActions.fetchInReviewProblems,
    reviewQueueActions: () => reviewQueueActions.fetchReviewQueue
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ReviewCard))