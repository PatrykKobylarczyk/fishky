import React, { useState } from 'react'
import './LearningCard.scss'

//COMPONENTS
import Obverse from './Obverse'
import Reverse from './Reverse'

const LearningCars = () => {

    const [isFlipped, setIsFlipped] = useState(false)

    const cardFlipHandler = () => {
        setIsFlipped(prev => !prev)
    }

    return (
        <div className={`learningCard ${isFlipped ? 'flipped' : ''} `} onClick={cardFlipHandler}>
            {isFlipped ? <Obverse /> : <Reverse />}
        </div>
    );
}

export default LearningCars;