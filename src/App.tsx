import React, {useState} from 'react';
import QuestionCard from './Components/QuestionCard'
import {fetchQuizQuestions } from './API'
import { QuestionState, Difficulty } from './API'

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 30


function App() {
  const [Loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  
  const startQuestions = async() => {
      setLoading(true);
      setGameOver(false);

      const newQuestions = await fetchQuizQuestions(
          TOTAL_QUESTIONS,
          Difficulty.EASY
      )
      setQuestions(newQuestions);
      setScore(0)
      setUserAnswers([])
      setNumber(0)
  }

  const checkAnswer = ( e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }
  
  return (
    <div className="App">
       <h1>Quiz</h1>
       <button className='start' onClick={startQuestions}>
         Start
       </button>
       <p className='score'>Score:</p>
       <p>Loading Questions...</p>
      {/* <QuestionCard 
          questionNo={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
  />*/}
       <button className='next' onClick={nextQuestion}>
         Next Question
       </button>
    </div>
  );
}

export default App;
