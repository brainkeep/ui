import * as ActionTypes from '../utils/ActionTypes';

const init = {
  dialog_open: false
};

const headerStatus = (headerStatus = init, action) => {
  switch (action.type) {
    case ActionTypes.OPEN_HEADER_DIALOG:
      return {
        ...headerStatus,
        dialog_open: true,
      };
    case ActionTypes.CLOSE_HEADER_DIALOG:
      return {
        ...headerStatus,
        dialog_open: false,
      };
    default:
      return headerStatus;
  }
};

export default headerStatus;