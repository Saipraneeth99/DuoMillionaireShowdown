import React, { useState } from 'react';
import { Modal } from '@material-ui/core';
import Buzzer from './Buzzer';
import { questionData } from '../buzzerqa';
import '../styles/landingpage.css';
import back from "../images/bg.jpg";
import { Link, useHistory } from "react-router-dom";
import correct from '../images/1545571884.png';
import incorrect from '../images/milker_X_icon.png';

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [message, setMessage] = useState("");
    const [showContinueButton, setShowContinueButton] = useState(false);
    const [timerRunning, setTimerRunning] = useState(true);
    const [isVisible, setIsVisible] = useState(true);

    const history = useHistory(); // Using react-router-dom's useHistory hook for navigation

    const getRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * questionData.length);
        return questionData[randomIndex];
    };

    const handleModalOpen = () => {
        //document.getElementById("button-play-now").style.display = "none"
        setIsVisible(false);
		setIsOpen(true);
		console.log(currentQuestion);
        setCurrentQuestion(getRandomQuestion());
    };

    const handleModalClose = () => {
        console.log("In handle Model close");
        setIsVisible(true);
        setIsOpen(false);
        setMessage("");
        setShowContinueButton(false);
        setTimerRunning(true);
    };

    const onAnswerSelected = (isCorrect) => {
        if (isCorrect) {
            setMessage("Correct!");
            setShowContinueButton(true);
        } else {
            setMessage("Incorrect answer! Try again.");
            setCurrentQuestion(getRandomQuestion());
        }
    };

    const Continue = async () => {
        handleModalClose();
        history.push("/gamepage"); // navigate to game page
    };

    return (
        <div
            className="backside"
            style={{ backgroundImage: `url(${back})` }}
        >
            {isVisible && (<button
                id="button-play-now"
                style={{
                    height: "20%",
                    width: "inherit",
                }}
                type="button"
                className="btn btn-warning"
                onClick={handleModalOpen}
            >
                <h1>Play Now</h1>
            </button>)}
            
            <Modal
                open={isOpen}
				backdrop="static"
                /*onClose={handleModalClose}*/
                aria-labelledby="quiz-modal"
                aria-describedby="quiz-modal-description"
                className="modal buzzmod"
            >
                <div className="modalContent buzz-modal d-flex flex-column align-items-center justify-content-center">
                    <Buzzer 
                        question={currentQuestion}
                        onAnswerSelected={onAnswerSelected}
                        setTimerRunning={setTimerRunning}
                    />
                    <p>{message === 'Correct!' && (
                        <img  src={correct} alt="Image 1" />
                    )}
                    {message === 'Incorrect answer! Try again.' && (
                            <img src={incorrect} alt="Image 2" />
                    )}</p>
                    {showContinueButton && (
                        <button className="btn btn-warning" onClick={Continue}>
                            <b>Continue Game</b>
                        </button>
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default Landing;
