import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
import Flashcard from './components/Flashcard/Flashcard';


const App = () => {

 

  return (
    <Router>
      <div className="app">
        <Flashcard />
      </div>
    </Router>

  );
}

export default App;
