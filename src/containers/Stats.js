// React Redux
import React from 'react'
import { connect } from 'react-redux'

// Material UI
import { withStyles } from '@material-ui/core/styles';

// ActionCreators
import * as ProblemsActions from '../actions/ProblemsActions'

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
    
    render() {
        const data = this.props.problems.data;
        return (
            <div>
                Number of problems solved: {data.length}
                <br />
                Number of reviews completed: {data.map(d => d.times_solved).reduce((a, b) => a + b, 0) - data.length}
            </div>
        )
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
        coder_id: state.coder.data.coder_id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProblems: (coder_id) => dispatch(ProblemsActions.fetchProblems(coder_id))
    }
}

const styles = {};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Stats))