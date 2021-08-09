import { useGlobalContext } from '../context';

const Form = () => {
  const { onSubmit, quiz, onChange, error } = useGlobalContext();
  return (
    <section className="quiz quiz-small">
      <form className="setup-form" onSubmit={onSubmit}>
        <h2>setup quiz</h2>
        <div className="form-control">
          <label>Number of Questions</label>
          <input
            type="number"
            min="1"
            max="50"
            name="amount"
            className="form-input"
            value={quiz.amount}
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label>Category</label>
          <select
            name="category"
            className="form-input"
            onChange={onChange}
            value={quiz.category}
          >
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>
        </div>
        <div className="form-control">
          <label>Difficulty</label>
          <select
            name="difficulty"
            className="form-input"
            onChange={onChange}
            value={quiz.difficulty}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        {error && (
          <div className="error">Cannot generate quiz! Please try again</div>
        )}
        <button type="submit" className="submit-btn">
          Start
        </button>
      </form>
    </section>
  );
};

export default Form;
