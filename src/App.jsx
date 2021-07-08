import { useState } from 'react';
import './App.css';
import NewParticipantContainer from './containers/NewParticipantContainer';
import Users from './containers/UserContainer';
import Winner from './containers/WinnerContainer'

function App() {
  return (
    <div className="App">
        <Users/>
        <div className="wrapper">
          <NewParticipantContainer/>
          <Winner/>
        </div>
    </div>
  );
}

export default App;
