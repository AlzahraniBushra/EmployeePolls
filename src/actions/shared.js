import { _getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";





export function handleLogin(AUTHED_ID) {
  return (dispatch) => {
    dispatch(setAuthedUser(AUTHED_ID));
  }
}

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
