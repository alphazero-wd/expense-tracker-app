import React, { useState, useContext } from 'react';
const AppContext = React.createContext();
const API_ENDPOINT = 'https://opentdb.com/api.php?';
const table = {
  sports: 21,
  history: 23,
  politics: 24,
};
const AppProvider = ({ children }) => {
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy',
  });
  const [setup, setSetup] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const fetchQuiz = async (url) => {
    setSetup(false);
    setLoading(true);
    const res = await fetch(url).catch((err) => console.log(err));
    const data = await res.json();
    const { results } = data;
    if (res) {
      if (results.length > 0) {
        setQuestions(results);
        setSetup(false);
        setError(false);
      } else {
        setError(true);
        setSetup(true);
      }
    } else {
      setSetup(true);
    }
    setLoading(false);
  };
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;
    const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;
    fetchQuiz(url);
  };
  const nextQuestion = () => {
    setIndex((nextIndex) => {
      if (nextIndex > questions.length - 2) {
        nextIndex = 0;
        setShowModal(true);
      }
      return nextIndex + 1;
    });
  };

  const checkAnswer = (e) => {
    const answer = e.target.textContent;
    if (answer === questions[index].correct_answer) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  return (
    <AppContext.Provider
      value={{
        setup,
        setSetup,
        error,
        setError,
        questions,
        index,
        score,
        loading,
        showModal,
        setShowModal,
        onSubmit,
        onChange,
        quiz,
        nextQuestion,
        checkAnswer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
