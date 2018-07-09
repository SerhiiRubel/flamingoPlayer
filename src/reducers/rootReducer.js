import {combineReducers} from 'redux';
import tracks from './tracks';
import getCurrentTrack from './getCurrentTrack';

const rootReducers = combineReducers({
  tracks,
  currentTrack: getCurrentTrack,
});

export default rootReducers;