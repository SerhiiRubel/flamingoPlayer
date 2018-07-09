import types from "../types/tracks";

export default function tracks(state = {}, action) {
  switch(action.type) {
    case types.GET_ALL_TRACKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ALL_TRACKS_SUCCESS:
      return {
        ...state,
        tracks: action.payload,
        isLoading: false
      };
    case types.GET_ALL_TRACKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };
    default: return state;
  }
}