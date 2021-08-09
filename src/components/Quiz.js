import { useGlobalContext } from '../context';
const Quiz = () => {
  const { questions, index, score, nextQuestion, checkAnswer } =
    useGlobalContext();
  const { question, incorrect_answers, correct_answer } = questions[index];
  const answers = [...incorrect_answers, correct_answer].sort(
    () => 0.5 - Math.random()
  );
  return (
    <section className="quiz">
      <p className="correct-answers">
        Correct answers: {score} / {index}
      </p>
      <article className="container">
        <h2>{question}</h2>
        <div className="btn-container">
          {answers.map((answer, index) => (
            <button className="answer-btn" key={index} onClick={checkAnswer}>
              {answer}
            </button>
          ))}
        </div>
      </article>
      <button className="next-question" onClick={nextQuestion}>
        Next Question
      </button>
    </section>
  );
};

export default Quiz;
