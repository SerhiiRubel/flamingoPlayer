import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import getAllTracks from "./actions/tracks";

const store = createStore(rootReducer, compose(
  applyMiddleware(reduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>  ,
  document.getElementById('root'));
registerServiceWorker();
