import * as ActionTypes from '../util/ActionTypes'

const init = {
    dialog_open: false,
    stats_drawer_open: false,
}

const appBarStatus = (appBarStatus = init, action) => {
    switch (action.type) {
        case ActionTypes.OPEN_APPBAR_DIALOG:
            return {
                ...appBarStatus,
                dialog_open: true
            }
        case ActionTypes.CLOSE_APPBAR_DIALOG:
            return {
                ...appBarStatus,
                dialog_open: false
            }
        case ActionTypes.OPEN_STATS_DRAWER:
            return {
                ...appBarStatus,
                stats_drawer_open: true
            }
        case ActionTypes.CLOSE_STATS_DRAWER:
            return {
                ...appBarStatus,
                stats_drawer_open: false
            }
        default:
            return appBarStatus
    }
}

export default appBarStatus