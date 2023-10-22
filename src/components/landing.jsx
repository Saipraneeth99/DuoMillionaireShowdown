// import React, { useEffect, useState } from "react";
// import Disclaimer from "./Disclaimer";
// import "../styles/landingpage.css";
// import back from "../images/bg.jpg";
// export default function Landing() {
// 	const [disclaimer, setdisclaimer] = useState(false);
// 	async function close() {
// 		setdisclaimer(!disclaimer);
// 	}
// 	async function opendisc() {
// 		setdisclaimer(!disclaimer);
// 	}
	
// 	return (
// 		<div
// 			className="backside"
// 			style={{
// 				backgroundImage: `url(${back}
// 				)`,
// 			}}
// 		>
// 			<Disclaimer open={disclaimer} close={close} />
// 			<button
// 				style={{
// 					height: "20%",
// 					width: "inherit",
// 				}}
// 				type="button"
// 				class="btn btn-warning"
// 				onClick={opendisc}
// 			>
// 				<h1>Play Now</h1>
// 			</button>
// 		</div>
// 	);
// }


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "../styles/landingpage.css";
// import back from "../images/bg.jpg";
// import Buzzer from './Buzzer'; // Make sure this path is correct
// import questionData from '../buzzerqa'; // Assuming buzzer.js contains the questions. Adjust the path accordingly.

// export default function Landing() {
//     const [modalOpen, setModalOpen] = useState(false);
//     const [question, setQuestion] = useState(questionData);
//     const [isCorrect, setIsCorrect] = useState(null);
    
//     const handleQuestionAnswered = (correct) => {
//         if (correct) {
//             setIsCorrect(true);
//         } else {
//             setIsCorrect(false);
//             // Assuming you have a function to get a new question. Replace with your logic if different.
//             setQuestion(getNewQuestion());
//         }
//     };

//     const handleModalOpen = () => {
//         setIsCorrect(null); // Reset the isCorrect state
//         setModalOpen(true);
//     };

//     const handleModalClose = () => {
//         setModalOpen(false);
//     };

//     return (
//         <div
//             className="backside"
//             style={{ backgroundImage: `url(${back})` }}
//         >
//             {modalOpen && (
//                 <div className="modal">
//                     <Buzzer questionData={question} onAnswered={handleQuestionAnswered} />
//                     {isCorrect && (
//                         <Link className="btn btn-warning" to="/gamepage">
//                             <b>Continue Game</b>
//                         </Link>
//                     )}
//                     {isCorrect === false && <p>Incorrect answer! Try again.</p>}
//                 </div>
//             )}
//             <button
//                 style={{
//                     height: "20%",
//                     width: "inherit",
//                 }}
//                 type="button"
//                 className="btn btn-warning"
//                 onClick={handleModalOpen}
//             >
//                 <h1>Play Now</h1>
//             </button>
//         </div>
//     );
// }

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { questionData } from "./buzzerqa"; // Adjust path if necessary
// import "../styles/landingpage.css";
// import back from "../images/bg.jpg";

// export default function Landing() {
//     const [modalOpen, setModalOpen] = useState(false);
//     const [question, setQuestion] = useState(null);
//     const [isCorrect, setIsCorrect] = useState(null);

//     const getRandomQuestion = () => {
//       const randomIndex = Math.floor(Math.random() * questionData.length);
//       return questionData[randomIndex];
//     };

//     const handleAnswerClick = (answer) => {
//         if (answer.correct) {
//             setIsCorrect(true);
//         } else {
//             setIsCorrect(false);
//             setQuestion(getRandomQuestion());  // Set a new random question
//         }
//     };

//     const handleModalOpen = () => {
//         setIsCorrect(null); // Reset the isCorrect state
//         setQuestion(getRandomQuestion());  // Load a random question
//         setModalOpen(true);
//     };

//     return (
//         <div
//             className="backside"
//             style={{ backgroundImage: `url(${back})` }}
//         >
//             {modalOpen && (
//                 <div className="modal">
//                     <p>{question.question}</p>
//                     {question.answers.map((answer, index) => (
//                         <button key={index} onClick={() => handleAnswerClick(answer)}>
//                             {answer.text}
//                         </button>
//                     ))}
//                     {isCorrect && (
//                         <>
//                             <p>Correct!</p>
//                             <Link className="btn btn-warning" to="/gamepage">
//                                 <b>Continue Game</b>
//                             </Link>
//                         </>
//                     )}
//                     {isCorrect === false && <p>Incorrect answer! Try again.</p>}
//                 </div>
//             )}
//             <button
//                 style={{
//                     height: "20%",
//                     width: "inherit",
//                 }}
//                 type="button"
//                 className="btn btn-warning"
//                 onClick={handleModalOpen}
//             >
//                 <h1>Play Now</h1>
//             </button>
//         </div>
//     );
// // }
// import React, { useState } from 'react';
// import { Modal } from '@material-ui/core';
// import Buzzer from './Buzzer';
// import { questionData } from '../buzzerqa'; // Import your data here
// import '../styles/landingpage.css';
// import back from "../images/bg.jpg";
// import { Link } from "react-router-dom";

// const Landing = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [currentQuestion, setCurrentQuestion] = useState({});
//     const [message, setMessage] = useState("");
//     const [showContinueButton, setShowContinueButton] = useState(false);
//     const [timerRunning, setTimerRunning] = useState(true);

//     const getRandomQuestion = () => {
//         const randomIndex = Math.floor(Math.random() * questionData.length);
//         return questionData[randomIndex];
//     };

//     const handleModalOpen = () => {
// 		setIsOpen(true);
// 		console.log(currentQuestion);
//         setCurrentQuestion(getRandomQuestion());
        
//     };

//     const handleModalClose = () => {
//         setIsOpen(false);
//         setMessage("");
//         setShowContinueButton(false);
//         setTimerRunning(true);
//     };

//     const onAnswerSelected = (isCorrect) => {
//         if (isCorrect) {
//             setMessage("Correct!");
//             setShowContinueButton(true);
//         } else {
//             setMessage("Incorrect answer! Try again.");
//             setCurrentQuestion(getRandomQuestion()); // Load a new question if the answer is incorrect
//         }
//     };

//     return (
//         <div
//             className="backside"
//             style={{ backgroundImage: `url(${back})` }}
//         >
//             <button
//                 style={{
//                     height: "20%",
//                     width: "inherit",
//                 }}
//                 type="button"
//                 className="btn btn-warning"
//                 onClick={handleModalOpen}
//             >
//                 <h1>Play Now</h1>
//             </button>
// {/*             
//             <Modal
//                 open={isOpen}
//                 onClose={handleModalClose}
//                 aria-labelledby="quiz-modal"
//                 aria-describedby="quiz-modal-description"
//                 className="modal"
//             >
//                 <div className="modalContent">
//                     <Buzzer 
//                         question={currentQuestion}
//                         onAnswerSelected={onAnswerSelected}
//                         setTimerRunning={setTimerRunning}
//                     />
//                     <p>{message}</p>
//                     {showContinueButton && (
//                         <button onClick={handleModalOpen}>Continue Game</button>
//                     )}
//                 </div>
//             </Modal> */}
// 			<Modal
//                 open={isOpen}
//                 onClose={handleModalClose}
//                 aria-labelledby="quiz-modal"
//                 aria-describedby="quiz-modal-description"
//                 className="modal"
//             >
//                 <div className="modalContent">
//                     <Buzzer 
//                         question={currentQuestion}
//                         onAnswerSelected={onAnswerSelected}
//                         setTimerRunning={setTimerRunning}
//                     />
//                     <p>{message}</p>
//                     {showContinueButton && (
//                         <Link className="btn btn-warning" to="/gamepage" onClick={Continue}>
//                             <b>Continue Game</b>
//                         </Link>
//                     )}
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// export default Landing;


import React, { useState } from 'react';
import { Modal } from '@material-ui/core';
import Buzzer from './Buzzer';
import { questionData } from '../buzzerqa';
import '../styles/landingpage.css';
import back from "../images/bg.jpg";
import { Link, useHistory } from "react-router-dom";

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [message, setMessage] = useState("");
    const [showContinueButton, setShowContinueButton] = useState(false);
    const [timerRunning, setTimerRunning] = useState(true);

    const history = useHistory(); // Using react-router-dom's useHistory hook for navigation

    const getRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * questionData.length);
        return questionData[randomIndex];
    };

    const handleModalOpen = () => {
		setIsOpen(true);
		console.log(currentQuestion);
        setCurrentQuestion(getRandomQuestion());
    };

    const handleModalClose = () => {
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
            <button
                style={{
                    height: "20%",
                    width: "inherit",
                }}
                type="button"
                className="btn btn-warning"
                onClick={handleModalOpen}
            >
                <h1>Play Now</h1>
            </button>
            
            <Modal
                open={isOpen}
                onClose={handleModalClose}
                aria-labelledby="quiz-modal"
                aria-describedby="quiz-modal-description"
                className="modal"
            >
                <div className="modalContent">
                    <Buzzer 
                        question={currentQuestion}
                        onAnswerSelected={onAnswerSelected}
                        setTimerRunning={setTimerRunning}
                    />
                    <p>{message}</p>
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
