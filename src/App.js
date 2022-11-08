import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import './App.scss';
import { onSnapshot, collection } from "firebase/firestore";

//COMPONENTS
import Flashcard from './components/Flashcard/Flashcard';
import PrevArrow from './components/Arrows/PrevArrow';
import NextArrow from './components/Arrows/NextArrow';

//ICONS
import { IconContext } from 'react-icons';

//DATA
import { english } from './components/Data/english'
import { react } from './components/Data/react';
import db from './firebase'

const App = () => {

  const [cardNumber, setCardNumber] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('english');
  const [isFlipped, setFlipped] = useState(false);
  const [data, setData] = useState([]);

  //data form firebase
  const ref = collection(db, 'learn')

  const getData = () => {
    onSnapshot(ref, (querySnapshot)=>{
      const items = [];
      querySnapshot.forEach(doc=>{
        items.push(doc.data())
      })
      setData(items)
    })
  }

  useEffect(()=>{
    getData();
    console.log(data[0]);
  },[])


  // I use  sessionStorage to store selected category, because when I refresh learning card I lose sufix of my logo
  useEffect(() => {
    sessionStorage.setItem('selectedCategory', selectedCategory);
  }, [selectedCategory]);

  const nextCard = () => {
    setTimeout(() => {
      switch (selectedCategory) {
        case 'english':
          if (cardNumber === english.length - 1) {
            setCardNumber(0)
          } else {
            setCardNumber(prev => prev + 1)
          }
          break;
        case 'react':
          if (cardNumber === react.length - 1) {
            setCardNumber(0)
          } else {
            setCardNumber(prev => prev + 1)
          }
          break;
        default:
          console.log('Oop, I did it again:)');
      }
    }, 65);
    setFlipped(false)
  }

  const prevCard = () => {
    setTimeout(() => {
      switch (selectedCategory) {
        case 'english':
          if (cardNumber === 0) {
            setCardNumber(english.length - 1)
          } else {
            setCardNumber(prev => prev - 1)
          }
          break;
        case 'react':
          if (cardNumber === 0) {
            setCardNumber(react.length - 1)
          } else {
            setCardNumber(prev => prev - 1)
          }
          break;
        default:
          console.log('Oop, I did it again:)');
      }
    }, 65);
    setFlipped(false)
  }


  const location = useLocation();
  const currentLocation = location.pathname

  return (
    <IconContext.Provider value={{ size: 30, color: 'rgb(80, 80, 80)' }}>
      <div className="app">
        <div className="appView">
          {currentLocation === '/fishky/learn/learning-card' && <PrevArrow prevCard={prevCard} />}
          <Flashcard
            cardNumber={cardNumber}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            isFlipped={isFlipped}
            setFlipped={setFlipped}
          />
          {currentLocation === '/fishky/learn/learning-card' && <NextArrow nextCard={nextCard} />}
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default App;
