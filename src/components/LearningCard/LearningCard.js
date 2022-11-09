import React from 'react'
import './LearningCard.scss'

//COMPONENTS
import EnglishCard from './EnglishCard';
import ReactCard from './ReactCard';


const LearningCars = ({ option, cardNumber, selectedCategory }) => {

    return (
        <>
            {selectedCategory === 'english' && <EnglishCard option={option} cardNumber={cardNumber} />}
            {selectedCategory === 'react' && <ReactCard option={option} cardNumber={cardNumber} />}
        </>
    );
}

export default LearningCars;