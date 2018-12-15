import * as ActionTypes from '../util/ActionTypes'

export const openAppBarDialog = () => dispatch => {
    dispatch({type: ActionTypes.OPEN_APPBAR_DIALOG})
}

export const closeAppBarDialog = () => dispatch => {
    dispatch({type: ActionTypes.CLOSE_APPBAR_DIALOG})
}