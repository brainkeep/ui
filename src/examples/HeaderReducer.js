import * as ActionTypes from "../utils/ActionTypes";

const init = {
  isOpen: false
};

const headerStatus = (headerStatus = init, action) => {
  switch (action.type) {
    case ActionTypes.OPEN_HEADER_DIALOG:
      return {
        ...headerStatus,
        isOpen: true
      };
    case ActionTypes.CLOSE_HEADER_DIALOG:
      return {
        ...headerStatus,
        isOpen: false
      };
    default:
      return headerStatus;
  }
};

export default headerStatus;
