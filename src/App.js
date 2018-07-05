import React, {Fragment} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import PlayerContainer from "./containers/Player/PlayerContainer";
import HeaderComponent from './components/Header/HeaderComponent';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faBackward, faForward, faPause } from '@fortawesome/free-solid-svg-icons';
import LoginPageContainer from "./containers/LoginPage/LoginPageContainer";
library.add(faPlay, faBackward, faForward, faPause);

function App() {
      return (
        <BrowserRouter>
          <Fragment>
            <HeaderComponent />
            <Route exact path='/' component={PlayerContainer}/>
            <Route path='/login' component={LoginPageContainer}/>
          </Fragment>
        </BrowserRouter>
      );
}

export default App;
