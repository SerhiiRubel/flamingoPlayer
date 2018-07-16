import { reducer as formReducer } from 'redux-form';
import {combineReducers} from 'redux';
import tracks from './tracks';
import progress from './progress';
import auth from './auth';
import playStatus from './playStatus';
import toggleSearchModal from "./toogleSearchModal";
import userPlaylist from "./userPlaylist";

const rootReducers = combineReducers({
  tracks,
  playlist: userPlaylist,
  playStatus,
  progress,
  auth,
  isOpenModal: toggleSearchModal,
  form: formReducer,
});

export default rootReducers;