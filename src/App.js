import React, {useState} from 'react';

import './App.scss';
import Flashcard from './components/Flashcard/Flashcard';

const App = () => {

  const [isFlipped, setIsFlipped] = useState(false)
  const [buttonText, setButtonText] = useState([ 'learn', 'create'])
  
  return (
    <div className="app">
        <Flashcard
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
        buttonText={buttonText}
        />
    </div>
  );
}

export default App;
