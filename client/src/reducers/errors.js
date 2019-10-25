import { SET_ERRORS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;
  let errors = {};
  //construct error object from array
  if (payload && Array.isArray(payload)) {
    payload.forEach(error => {
      if (error.param) errors[error.param] = error.msg;
      else errors.gen = error.msg;
    });
  }

  switch (type) {
    case SET_ERRORS:
      return errors;
    default:
      return state;
  }
}
