import types from './../types/tracks';

export default function getCurrentTrack(state = {}, action) {
  // console.log('стате', state, action);
  switch (action.type) {
    case types.GET_CURRENT_TRACK:
      return {
        ...action.payload
      };
    default: return state;
  }
}