import types from "../types/tracks";

const initialState = {
  tracks: [],
  isLoading: false,
  err: null,
};

export default function tracks(state = initialState, action) {
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
    case types.DEL_FOUND_TRACK:
      return {
        ...state,
        tracks: [...state.tracks.filter( item => item.id !== action.payload)]
      };
    default: return state;
  }
}