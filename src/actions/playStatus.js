import types from '../types/playStatus';

export default function isPlay(isPlay) {
  return {
    type: types.CHANGE_PLAY_STATUS,
    payload: isPlay
  }
}