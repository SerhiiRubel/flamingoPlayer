import types from './../types/userPlaylist';

export default function userPlaylist(type, track) {
  return function(dispatch) {
    if(type === 'add') {
      dispatch({
        type: types.ADD_TRACK,
        payload: track,
      })
    } else if(type === 'del') {
      console.log(track);
      dispatch({
        type: types.DEL_TRACK,
        payload: track,
      })
    }
  }
}