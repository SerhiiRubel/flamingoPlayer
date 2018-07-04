import React, { Component } from 'react';
import './App.css';
import PlayerContainer from "./containers/Player/PlayerContainer";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBackward, faForward, faPause } from '@fortawesome/free-solid-svg-icons';
library.add(faPlay, faBackward, faForward, faPause);

function App() {
    return (
      <PlayerContainer />
    );
}

export default App;
