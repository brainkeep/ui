import * as ActionTypes from '../utilities/ActionTypes'

const init = {
    dialog_open: false,
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
        default:
            return appBarStatus
    }
}

export default appBarStatus