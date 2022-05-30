import React, { useState } from 'react';
import Category from '../Category/Category';
import './Create.scss'

import { english } from '../Data/english'
import { react } from '../Data/react'


const Create = ({ selectedCategory, setOption }) => {

    const [word, setWord] = useState();
    const [description, setDescription] = useState();


    const newCardHandler = (e) => {
        e.preventDefault();
        if (selectedCategory === 'english') {
            //check if array includes that word in object 
            english.push({
                id: english.lenght + 1,
                word: word,
                description: description
            })
        } else if (selectedCategory === 'react') {
            // english.includes(word) 
            // ? null
            // : 
            // that is not perfect idea:)
            react.push({
                id: react.lenght + 1,
                word: word,
                description: description
            })
        }
        setOption(['learn', 'create'])
    }


    return (
        <form className='newCardForm' onSubmit={newCardHandler}>
            <Category selectedCategory={selectedCategory} />
            <input type='text' name='obverse' placeholder=' enter obverse...' className='obverseInput' onChange={e => setWord(e.target.value)}></input>
            <input type='text' name='reverse' placeholder='enter reverse...' className='reverseInput' onChange={e => setDescription(e.target.value)}></input>
            <button type='submit' className='btn'>create</button>
        </form>
    )
}

export default Create;