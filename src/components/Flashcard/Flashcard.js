import React, { useState } from 'react';
import './Flashcard.scss'

//COMPONENTS
import Logo from '../Logo/Logo';
import ChooseOption from '../ChooseOption/ChooseOption';
import Views from '../Views/Views';
import LearningCard from '../LearningCard/LearningCard';

const Flashcard = () => {

    const [buttonText, setButtonText] = useState(['learn', 'create'])
    const [option, setOption] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [learning, setLearning] = useState(false)
    const [isFlipped, setFlipped] = useState(false)

    
    const cardFlipHandler = () => {
        learning && setFlipped(prev => !prev)
    }

    const LearnBtnHandler = () => {
        setOption(['learn'])
        setButtonText('start')
    }

    const CreateBtnHandler = () => {
        setOption(['create'])
    }

    const StartLearningHandler = () => {
        setLearning(true)
        setOption([`${selectedCategory}`])
    }

    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={cardFlipHandler}>
            {!learning && <Logo option={option}/>} 
            {option.length === 0 &&
                <ChooseOption
                    buttonText={buttonText}
                    LearnBtnHandler={LearnBtnHandler}
                    CreateBtnHandler={CreateBtnHandler}
                />}
            {option.includes('learn') &&
                <Views
                    buttonText={buttonText}
                    StartLearningHandler={StartLearningHandler}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />}
            {learning && 
            <LearningCard 
            option={option}
            isFlipped={isFlipped}
            />}
        </div>
    );
}

export default Flashcard;