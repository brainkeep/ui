// React Redux
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';

// Store
import store from './app/store';

// Containers
import App from './app/App';

/*

 █████╗ ██████╗ ██████╗     ██████╗  ██████╗  ██████╗ ████████╗
██╔══██╗██╔══██╗██╔══██╗    ██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝
███████║██████╔╝██████╔╝    ██████╔╝██║   ██║██║   ██║   ██║   
██╔══██║██╔═══╝ ██╔═══╝     ██╔══██╗██║   ██║██║   ██║   ██║   
██║  ██║██║     ██║         ██║  ██║╚██████╔╝╚██████╔╝   ██║   
╚═╝  ╚═╝╚═╝     ╚═╝         ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝   
                                                               
*/

render (
    <Provider store={store}>
        <React.Fragment>
            <CssBaseline />
            <App />
        </React.Fragment>
    </Provider>,
    document.getElementById('root')
)
