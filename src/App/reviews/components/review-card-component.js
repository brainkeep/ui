import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

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

export default ReviewCard
