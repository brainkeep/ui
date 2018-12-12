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
    this.props.fetchReviewQueue()
  }
  
  renderReviewCards() {
    const { classes } = this.props;
    const inReview = this.props.in_review_problems.data;
    const reviewQueue = this.props.review_queue.data;

    inReview.sort((a, b) => a.problem_id - b.problem_id);
    reviewQueue.sort((a, b) => a.problem_id - b.problem_id);
    var dataList = [];
    for (var i = 0; i < inReview.length; i++) {
      dataList.push(Object.assign({}, inReview[i], reviewQueue[i]));
    }
    dataList.sort((a, b) => a.review_id - b.review_id);

    var n = 1;
    return dataList.map(data => {
      
      return (
        <Grid key={data.problem_id} item>
          <Paper>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  No.{n++}
                </Typography>

                <Typography variant="h5" component="h2">
                  {data.problem_name}
                </Typography>

                <br/>
                <Typography component="p">
                <a href={data.problem_url}>Begin Solving Problem</a>
                </Typography>
              </CardContent>

              <CardActions>
                <Button size = "small" onClick={() => this.props.completeReview(data)}>
                  Complete Review
                </Button>
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
