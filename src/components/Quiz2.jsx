import React, { useState } from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

function Quiz2() {
  const questions = [
    {
      question: "What is the primary focus of offensive security?",
      choices: [
        "Breaking into systems and exploiting vulnerabilities",
        "Preventing intrusions and detecting them when they occur",
        "Training users about cybersecurity awareness"
      ],
      correctAnswer: 0
    },
    {
      question: "What are the main tasks of defensive security?",
      choices: [
        "Updating and patching systems",
        "Gathering threat intelligence",
        "Breaking into systems and exploiting vulnerabilities"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the role of a Security Operations Center (SOC)?",
      choices: [
        "Monitoring the network and systems to detect malicious events",
        "Training users about cybersecurity awareness",
        "Developing software applications for the company"
      ],
      correctAnswer: 0
    },
    // Add more questions here
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [submitBtnColor, setSubmitBtnColor] = useState('gray');
  const [nextPageVisible, setNextPageVisible] = useState(false);
  const [answerMessage, setAnswerMessage] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const handleAnswerSelection = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setIsButtonDisabled(false);
    setAnswerMessage('');
  };

  const handleSubmit = () => {
    // Check if the selected answer is correct
    const currentQuestion = questions[currentQuestionIndex];
    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setIsButtonDisabled(true);
    setSubmitBtnColor(correct ? 'green' : 'red');
    setNextPageVisible(correct);
    setAnswerMessage(correct ? 'Correct Answer' : 'Wrong Answer');
    if (correct) {
      setTotalScore((prevScore) => prevScore + 30);
    }
  };

  const handleNextQuestion = () => {
    if (isCorrect) {
      setSelectedAnswer(null);
      setIsCorrect(false);
      setIsButtonDisabled(true);
      setSubmitBtnColor('gray');
      setNextPageVisible(false);
      setAnswerMessage('');
      if (currentQuestionIndex === questions.length - 1) {
        setQuizCompleted(true);
      } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  return (
    <div className=' p-2'>
      <div className='flex justify-center items-center'>
        <div className=' p-5 h-full flex flex-col items-center '>
          {!quizCompleted ? (
            <>
              <button className='mb-[100px] mt-3 flex items-center text-lg px-2 text-[#0F57C1] opacity-55 hover:opacity-100 transition-all'><FaAngleLeft className="mr-1"/>Exit</button>
              {/* Question */}
              <div className='relative w-[800px] text-white px-2 py-10 text-center bg-[#0F57C1] rounded-xl flex justify-center'> 
                <div className='absolute bg-white text-[#0F57C1] px-5 py-2 rounded-full -top-5 border-[2px] border-[#0F57C1]'>
                  <h1>Question {currentQuestionIndex + 1}</h1>
                </div>
                <h1 className='text-[20px]'>{questions[currentQuestionIndex].question}</h1>
              </div>

              {/* Choices */}
              <div className="w-[800px] p-2 flex justify-center gap-3 mt-3 flex-wrap text-[#0F57C1]">
                {questions[currentQuestionIndex].choices.map((choice, index) => (
                  <button
                    key={index}
                    className={`bg-white border-[1px] border-[#0f57c1] w-[386px] py-5 px-5 rounded-xl hover:bg-[#0f57c1] transition-all hover:text-white ${selectedAnswer === index ? 'bg-customBlue text-white' : ''}`}
                    onClick={() => handleAnswerSelection(index)}
                    disabled={isCorrect || selectedAnswer === index}
                  >
                    {choice}
                  </button>
                ))}
              </div>

              <div className="p-5 mt-9 flex items-center gap-2">
                <button
                  className={`relative bg-${submitBtnColor}-500 bg-customBlue text-white py-3 px-12 rounded-full scale-100 hover:scale-110 transition-all`}
                  onClick={handleSubmit}
                  disabled={isButtonDisabled || isCorrect}
                >
                  <div className="absolute -top-3 -left-2 p-2 rounded-full bg-white border-[1px] border-[#0f57c1] text-[#0f57c1] text-[10px]">
                    <h1>+30</h1>
                  </div>
                  Submit
                </button>
                <button
                  className={`bg-[#0fc159] text-white py-3 px-12 rounded-full ${nextPageVisible ? '' : 'hidden'}`}
                  onClick={handleNextQuestion}
                >
                  {currentQuestionIndex === questions.length - 1 ? 'Exit' : 'Next Page'}
                </button>
              </div>
              <h1 style={{ color: isCorrect ? 'green' : 'red' }}>{answerMessage}</h1>
            </>
          ) : (
            // Display score screen
            <div className="text-center py-[14vw] ">
              <h1 className="text-4xl text-[#0f57c1] font-bold mb-4">Quiz Completed!</h1>
              <h2 className="text-2xl mb-10 text-[#0f57c1]">You earn: {totalScore}<span className='text-sm'>pts</span></h2>
              <NavLink to="/Student/Quiz" className="bg-[#0f57c1] text-white py-3 px-12 rounded-full">Exit</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Quiz2;
