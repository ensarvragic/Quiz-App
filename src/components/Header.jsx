import React from 'react'
import Image from '../assets/quiz-logo.png'

export default function Header() {
  return (
    <header>
        <img src={Image}/>
        <h1>ReactQuiz</h1>
    </header>
  )
}
