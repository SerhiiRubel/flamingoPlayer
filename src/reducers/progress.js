import types from './../types/progress';

export default function progress( state = 0, action ) {
  switch (action.type) {
    case types.GET_PROGRESS_TRACK:
      return {
        ...action.payload
      };
    default: return state;
  }
}