import * as ActionTypes from '../app/ActionTypes';

export const openAppBarDialog = () => dispatch => {
    dispatch({type: ActionTypes.OPEN_APPBAR_DIALOG});
};

export const closeAppBarDialog = () => dispatch => {
    dispatch({type: ActionTypes.CLOSE_APPBAR_DIALOG});
};

export const openStatsDrawer = () => dispatch => {
    dispatch({type: ActionTypes.OPEN_STATS_DRAWER});
};

export const closeStatsDrawer = () => dispatch => {
    dispatch({type: ActionTypes.CLOSE_STATS_DRAWER});
};