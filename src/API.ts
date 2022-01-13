import { shuffleArray } from "./Utils";
import axios from 'axios'

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[]}

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export const fetchQuizQuestions = (amount: number, difficulty: Difficulty) => {
    const endpoint: any = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    return (axios
        .get(endpoint)
        .then(res => {
            return res.data.results.map((question: Question) => (
                {
                    ...question,
                    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
                   
                }
               
            ))
              console.log(res)
        })
        .catch(err => err.message))
                  
   
}