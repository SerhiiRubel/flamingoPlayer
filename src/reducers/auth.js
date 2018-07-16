import {AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS} from "../types/auth";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  errors: null,
  currentUser: null
};

export default function tracks(state = initialState, action) {
  switch(action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: action.payload
      };
    case AUTH_FAILURE:
      return {
        ...state,
        err: action.payload
      };
    default: return state;
  }
}