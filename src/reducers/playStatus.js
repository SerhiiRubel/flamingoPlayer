import types from "../types/playStatus";

const initialState = {
  isPlay: false,
}

export default function playStatus(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_PLAY_STATUS:
      return {
        ...state,
        isPlay: action.payload,
      }
    default: return state;
  }
}