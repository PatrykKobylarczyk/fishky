import React from 'react'
import './LearningCard.scss'

//COMPONENTS
import Obverse from './Obverse'
import Reverse from './Reverse'

const LearningCars = ({option, isFlipped}) => {

    return (
        <>
            <Obverse option={option}/>  
            <Reverse  option={option}/>
        </>
    );
}

export default LearningCars;