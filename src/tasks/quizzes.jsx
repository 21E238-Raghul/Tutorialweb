import React, { useState,useEffect } from 'react';


const topics = ['React JS', 'Mongo DB', 'Node JS','Express JS']; 

const questionsByTopic = {
  'React JS': [
    {
      question: 'What is the purpose of JSX in React.js, and how does it differ from regular JavaScript syntax?',
      options: ['JSX is a templating engine in React for server-side rendering.', 'JSX is used to define component structure in React, providing a concise syntax for describing UI elements. It closely resembles HTML, making it easier to write and understand React components.', 'JSX stands for JavaScript XML and is used for handling asynchronous operations in React.', 'JSX is a styling language in React, similar to CSS.'],
      correctAnswer: 'JSX is used to define component structure in React, providing a concise syntax for describing UI elements. It closely resembles HTML, making it easier to write and understand React components.',
    },
    {
      question: 'What is a React component, and what are the two types of components in React?',
      options: ['A React component is a function that executes a specific task. The two types are Stateless and Stateful.', 'A React component is a class or function that describes a part of the UI. The two types are Class Components and Functional Components.', 'A React component is an external library that simplifies state management. The two types are Redux Components and Context Components.', 'A React component is a database query in React. The two types are Query Components and Mutation Components.'],
      correctAnswer: 'A React component is a class or function that describes a part of the UI. The two types are Class Components and Functional Components.',
    },
    {
      question: 'Explain the difference between React state and props.',
      options: ['State is used for passing data to child components, while props are used to manage the internal state of a component.', 'State is mutable and controlled by the component itself, while props are immutable and passed down from parent to child.', 'State is used for static data, while props are used for dynamic data that can change over time.', 'State and props are interchangeable terms in React, referring to the same concept.'],
      correctAnswer: 'State is mutable and controlled by the component itself, while props are immutable and passed down from parent to child.',
    },
    {
      question: 'How does React Router help in building Single Page Applications (SPAs)?',
      options: ['State is used for passing data to child components, while props are used to manage the internal state of a component.', 'State is mutable and controlled by the component itself, while props are immutable and passed down from parent to child.', 'State is used for static data, while props are used for dynamic data that can change over time.', 'State and props are interchangeable terms in React, referring to the same concept.'],
      correctAnswer: 'State is mutable and controlled by the component itself, while props are immutable and passed down from parent to child.',
    },
    {
      question: 'In React.js, what is the purpose of the render method within a class component?',
      options: ['To define the initial state of the component.', 'To handle user input and events.', 'To return the JSX (UI representation) that the component will render.', 'To update the component state'],
      correctAnswer: 'To return the JSX (UI representation) that the component will render.',
    },
  ],
  'Mongo DB': [
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
      correctAnswer: 'Mars',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
      correctAnswer: 'Mars',
    },
  ],
  'Node JS': [
    {
      question: 'Who was the first President of the United States?',
      options: ['George Washington', 'Thomas Jefferson', 'John Adams', 'James Madison'],
      correctAnswer: 'George Washington',
    },
  ],

'Express JS': [
  {
    question: 'Who was the first President of the United States?',
    options: ['George Washington', 'Thomas Jefferson', 'John Adams', 'James Madison'],
    correctAnswer: 'George Washington',
  },
],
};

const QuizApp = () => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questionsByTopic[selectedTopic][currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(true);
  }, [currentQuestion]);

  const renderTopicSelection = () => (
    <div className="topic-selection-container">
      <h2>Choose a Topic</h2>
      <div className="topics-container">
        {topics.map((topic, index) => (
          <div
            key={index}
            className={`topic ${selectedTopic === topic ? 'selected' : ''}`}
            onClick={() => handleTopicSelect(topic)}
          >
            {topic}
          </div>
        ))}
      </div>
      
    </div>
  );

  const renderQuiz = () => (
    <>
    <div className="quiz-container">
    {currentQuestion < questionsByTopic[selectedTopic].length ? (
      <div className="question-container">
        <h6>
          Question {currentQuestion + 1} of {questionsByTopic[selectedTopic].length}
        </h6>
        <h3>{questionsByTopic[selectedTopic][currentQuestion].question}</h3>
        <div className="options-container">
          {questionsByTopic[selectedTopic][currentQuestion].options.map((option, index) => (
            <div
              key={index}
              className={`option ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <button onClick={handleNextQuestion} disabled={!selectedOption}>
          Next Question
        </button>
      </div>
    ) : (
      <div className="result-container">
        <h2>Your Score: {score}/{questionsByTopic[selectedTopic].length}</h2>
      </div>
    )}
  </div>

  </>
  );

  return selectedTopic ? renderQuiz() : renderTopicSelection();
};

export default QuizApp;
