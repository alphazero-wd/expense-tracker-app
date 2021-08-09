import { useGlobalContext } from '../context';
const Income = () => {
  const { income, expense } = useGlobalContext();
  return (
    <div className="inc-exp-container">
      <div>
        <h4>income</h4>
        <p id="money-plus" className="money plus">
          ${income}.00
        </p>
      </div>
      <div>
        <h4>expense</h4>
        <p id="money-minus" className="money minus">
          ${expense}.00
        </p>
      </div>
    </div>
  );
};

export default Income;
