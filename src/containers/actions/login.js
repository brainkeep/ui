import axios from "axios";
import Configs from "../../utils/Configs";

const { actions, endpoints } = Configs;

export const changeCoderAccessToken = access_token => dispatch => {
  dispatch({
    type: actions.CHANGE_CODER_ACCESS_TOKEN,
    payload: access_token
  });
};

export const fetchCoder = access_token => dispatch => {
  dispatch({ type: actions.FETCH_CODER_PENDING });
  axios({
    method: "get",
    url: endpoints.fetchCoderURL(access_token),
    responseType: "json",
    timeout: 10000
  })
    .then(response =>
      dispatch({
        type: actions.FETCH_CODER_FULFILLED,
        payload: response.data
      })
    )
    .catch(err =>
      dispatch({ type: actions.FETCH_CODER_REJECTED, payload: err })
    );
};
