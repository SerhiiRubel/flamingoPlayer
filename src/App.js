import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/scss/App.css';
import PlayerContainer from "./containers/Player/PlayerContainer";
import HeaderComponent from './containers/Header/HeaderContainer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faBackward, faForward, faPause, faPlusSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import LoginPageContainer from "./containers/LoginPage/LoginPageContainer";
import {PrivateRoute} from "./containers/Authentication/AuthenticationContainer";
library.add(faPlay, faBackward, faForward, faPause, faPlusSquare, faTrashAlt);

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <HeaderComponent />
        <Switch>
          <PrivateRoute exact path='/' component={PlayerContainer}/>
          <Route path='/login' component={LoginPageContainer}/>
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
