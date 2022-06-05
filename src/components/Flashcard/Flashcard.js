import React, { useState, useEffect } from 'react';
import './Flashcard.scss'
import { Route, Routes, useLocation } from 'react-router-dom';

//DATA
import { english } from '../Data/english'
import { react } from '../Data/react';

//ICONS
import { IconContext } from 'react-icons';


//COMPONENTS
import Logo from '../Logo/Logo';
import ChooseOption from '../ChooseOption/ChooseOption';
import Views from '../Views/Views';
import LearningCard from '../LearningCard/LearningCard';
import Create from '../Create/Create';
import PrevArrow from '../Arrows/PrevArrow';
import NextArrow from '../Arrows/NextArrow';
import MenuIcon from '../Menu/MenuIcon';
import Menu from '../Menu/Menu';

const Flashcard = () => {

    const [option, setOption] = useState();
    const [selectedCategory, setSelectedCategory] = useState('english');
    const [isFlipped, setFlipped] = useState(false);
    const [cardNumber, setCardNumber] = useState(0);
    const [isMobile, setIsMobile] = useState(true);
    const [menu, openMenu] = useState(false)

    const location = useLocation();
    const curLoc = location.pathname

    //I need flipping just in this location
    const cardFlipHandler = () => {
        if (curLoc === '/fishky/learn/learning-card') {
            setFlipped(prev => !prev)
        }
    }

    // It disables flipping card in another locations
    useEffect(() => {
        if (curLoc !== '/fishky/learn/learning-card') {
            setFlipped(false)
        }
    }, [location])



    const StartLearningHandler = () => {
        setOption(selectedCategory)
    }

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

    const openMenuHandler = () => {
        openMenu(true)
    }
    
    const closeMenu = () =>{
        openMenu(false)
    }

    return (
        <IconContext.Provider value={{ size: 30, color: 'rgb(80, 80, 80)' }}>
            <div className="appView">
                {curLoc === '/fishky/learn/learning-card' && <PrevArrow prevCard={prevCard} />}
                <div className="cardMenu">
                    <div className={`card ${isFlipped && 'flipped'}`} onClick={cardFlipHandler}>
                        {curLoc !== '/fishky/learn/learning-card' && <Logo option={option} />}
                        <Routes>
                            <Route exact path='/fishky/' element={
                                <ChooseOption
                                    buttonText={['learn', 'create']}
                                />}
                            />
                            <Route path='/fishky/learn' element={
                                <Views
                                    buttonText='start'
                                    StartLearningHandler={StartLearningHandler}
                                    selectedCategory={selectedCategory}
                                    setSelectedCategory={setSelectedCategory}
                                />}
                            />
                            <Route path='/fishky/learn/learning-card' element={
                                <LearningCard
                                    option={option}
                                    isFlipped={isFlipped}
                                    cardNumber={cardNumber}
                                    selectedCategory={selectedCategory}
                                />}
                            />
                            <Route path='/fishky/create' element={
                                <Create
                                    selectedCategory={selectedCategory}
                                    setOption={setOption}
                                    setSelectedCategory={setSelectedCategory}
                                />}
                            />
                        </Routes>
                    </div>
                    {menu ? <Menu closeMenu={closeMenu}/> : <MenuIcon openMenuHandler={openMenuHandler}/> }
                </div>
                {curLoc === '/fishky/learn/learning-card' && <NextArrow nextCard={nextCard} />}
            </div>
        </IconContext.Provider>
    );
}

export default Flashcard;