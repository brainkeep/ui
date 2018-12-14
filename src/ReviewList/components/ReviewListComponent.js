import React from 'react'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class ReviewListComponent extends React.Component {

  componentWillMount () {
    this.props.fetchInReviewProblems()
    this.props.fetchReviewQueue()
  }
  
  renderListItems() {
    const inReview = this.props.in_review_problems.data;
    const reviewQueue = this.props.review_queue.data;
    
    inReview.sort((a, b) => a.problem_id - b.problem_id);
    reviewQueue.sort((a, b) => a.problem_id - b.problem_id);

    var dataList = [];
    for (var i = 0; i < inReview.length; i++) {
      dataList.push(Object.assign({}, inReview[i], reviewQueue[i]));
    }

    return dataList.sort((a, b) => a.review_id - b.review_id).map(data => {
      return (
        <div key={data.problem_id}>
          <ListItem button >
            <ListItemText primary={data.problem_name} />
            <Button variant="contained" color="secondary" href={data.problem_url}>Do</Button>
            <Button variant="contained" color="secondary" onClick={() => this.props.completeReview(data)}>Done</Button>
          </ListItem>
          <Divider />
        </div>
      )
    })
  }

  render() {
    return (
      <List>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Review Problems
            </Typography>
          </Toolbar>
        </AppBar>
        {this.renderListItems()}
      </List>
    )
  }
}

export default ReviewListComponent
