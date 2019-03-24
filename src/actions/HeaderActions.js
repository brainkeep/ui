import * as ActionTypes from '../utils/ActionTypes';

export const openHeaderDialog = () => dispatch => {
  dispatch({type: ActionTypes.OPEN_HEADER_DIALOG});
};

export const closeHeaderDialog = () => dispatch => {
  dispatch({type: ActionTypes.CLOSE_HEADER_DIALOG});
};
