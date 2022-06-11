import React, { useState, useEffect } from 'react';
import './Flashcard.scss'
import { Route, Routes, useLocation } from 'react-router-dom';
import useCheckMobileScreen from '../../customHooks/useCheckMobileScreen';

//ICONS
import { IconContext } from 'react-icons';

//COMPONENTS
import Logo from '../Logo/Logo';
import ChooseOption from '../ChooseOption/ChooseOption';
import Views from '../Views/Views';
import LearningCard from '../LearningCard/LearningCard';
import Create from '../Create/Create';
import MenuIcon from '../Menu/MenuIcon';
import MobileMenu from '../Menu/MobileMenu';
import DesktopMenu from '../Menu/DesktopMenu';

const Flashcard = ({cardNumber, selectedCategory, setSelectedCategory, setFlipped, isFlipped}) => {

    const [option, setOption] = useState();
    const [menu, openMenu] = useState(false)

    const location = useLocation();
    const currentLocation = location.pathname
    const isMobile = useCheckMobileScreen()

    //I need flipping just in this location
    const cardFlipHandler = () => {
        if (currentLocation === '/fishky/learn/learning-card') {
            setFlipped(prev => !prev)
        }
    }

    // It disables flipping card in another locations
    useEffect(() => {
        if (currentLocation !== '/fishky/learn/learning-card') {
            setFlipped(false)
        }
    }, [location])

    const StartLearningHandler = () => {
        setOption(selectedCategory)
    }

    const openMenuHandler = () => {
        ((event) => event.currentTarget == event.target) && openMenu(true)
    }

    const closeMenu = () => {
        openMenu(false)
    }

    return (
        <div >
            <div className={`card ${isFlipped && 'flipped'}`} onClick={cardFlipHandler}>
                {currentLocation !== '/fishky/learn/learning-card' && <Logo />}
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
            <IconContext.Provider value={{ size: 25, color: 'rgb(255, 255, 255)' }}>
                {isMobile
                    ? menu
                        ? <MobileMenu closeMenu={closeMenu} />
                        : <MenuIcon openMenuHandler={openMenuHandler} />
                    : <DesktopMenu />}
            </IconContext.Provider>
        </div>
    );
}

export default Flashcard;