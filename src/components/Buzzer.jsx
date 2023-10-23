import React, { useEffect, useState } from 'react';
import useSound from "use-sound";
import tiktok from "../audio/ticktock.mp3";
import wrongSound from "../audio/wrong answer.mp3";
import correctSound from "../audio/correct.mp3";
import '../styles/buzzer.css';

const Buzzer = ({ question, onAnswerSelected, setTimerRunning }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(tiktok);
  const [correctAnswerSound] = useSound(correctSound);
  const [wrongAnswerSound] = useSound(wrongSound);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setTimerRunning(false);
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(2000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });
    delay(3500, () => {
      if (a.correct) {
        correctAnswerSound();
        delay(500, () => {
          setSelectedAnswer(null);
          setTimerRunning(true);
          onAnswerSelected(true);
        });
      } else {
        wrongAnswerSound();
        delay(500, () => {
          onAnswerSelected(false);
        });
      };
    });
  };

  return (
    <div className='buzzer'>
      <div className="question">
        {question?.question}
      </div>
      <div className="options">
        {question?.answers.map((answer, index) => (
          <div 
            className={selectedAnswer === answer ? className : "answer"}
            key={index} 
            onClick={() => handleClick(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  )
};

export default Buzzer;
