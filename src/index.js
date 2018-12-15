// React Redux
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';

// Store
import store from './store'

// Containers
import ReviewList from './containers/ReviewList'

render (
    <Provider store={store}>
        <React.Fragment>
            <CssBaseline />
            <ReviewList />
        </React.Fragment>
    </Provider>,
    document.getElementById('root')
)
