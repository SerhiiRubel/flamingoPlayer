import types from '../types/userPlaylist';

export default function getCurrentTrack(track) {
  return function(dispatch) {
    if(track === 1 || track === -1) {
      dispatch({
        type: types.CHANGE_CURRENT_TRACK,
        payload: track
      })
    } else {
      dispatch({
        type: types.SET_CURRENT_TRACK,
        payload: track
      })
    }
  }
}
