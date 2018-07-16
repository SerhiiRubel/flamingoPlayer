import types from './../types/userPlaylist';

const initialState = {
  tracks: [],
  currentTrack: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TRACK:
      return {
        ...state,
        tracks: [...state.tracks, action.payload],
      };
    case types.DEL_TRACK:
      return {
        ...state,
        tracks: [...state.tracks.filter( item => item.id !== action.payload)],
      };
    case types.SET_CURRENT_TRACK:
      return {
        ...state,
        currentTrack: action.payload,
      };
    case types.CHANGE_CURRENT_TRACK:
      const { tracks, currentTrack } = state;
      let i = tracks.indexOf(currentTrack) + action.payload;
      if(i > tracks.length - 1) {
        i = 0;
      } else if(i < 0) {
        i = tracks.length -1;
      }
      return {
        ...state,
        currentTrack: tracks[i]
      };
    default: return state;
  }
}