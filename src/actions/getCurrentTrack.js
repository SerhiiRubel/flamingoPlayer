import types from '../types/tracks';

export default function getCurrentTrack(id) {
  return {
    type: types.GET_CURRENT_TRACK,
    payload: id
  }
}
