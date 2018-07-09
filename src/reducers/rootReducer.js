import { reducer as formReducer } from 'redux-form';
import {combineReducers} from 'redux';
import tracks from './tracks';
import progress from './progress';
import getCurrentTrack from './getCurrentTrack';
import auth from './auth';

const rootReducers = combineReducers({
  tracks,
  currentTrack: getCurrentTrack,
  progress,
  auth,
  form: formReducer,
});

export default rootReducers;