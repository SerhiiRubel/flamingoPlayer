import types from "../types/tracks";
import axios from 'axios';

const getAllTracks = query => {
  return function(dispatch) {
    dispatch({type: types.GET_ALL_TRACKS_REQUEST});
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/?q=${query}`)
      .then( response => {
       dispatch({
         type: types.GET_ALL_TRACKS_SUCCESS,
         payload: response.data.data
       });
      })
      .catch( error => {
        dispatch({
          type: types.GET_ALL_TRACKS_FAILURE,
          payload: error
        });
      });
  }
};

const deleteFoundTrack = id => {
  return {
    type: types.DEL_FOUND_TRACK,
    payload: id
  }
}

export {
  getAllTracks,
  deleteFoundTrack,
};
