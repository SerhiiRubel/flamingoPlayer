import types from "../types/progress";

export default function progress(time) {
  return {
    type: types.GET_PROGRESS_TRACK,
    payload: time
  }
}

