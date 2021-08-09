import { useGlobalContext } from '../context';
const Transaction = () => {
  const { onChange, item, onSubmit } = useGlobalContext();
  return (
    <form id="form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="Text">Text</label>
        <input
          type="text"
          id="text"
          name="text"
          placeholder="Enter text..."
          value={item.text}
          onChange={onChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="Amount">
          Amount
          <br />
          Amount (negative - expense, positive - income)
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="Enter amount..."
          value={item.amount}
          onChange={onChange}
        />
      </div>
      <button className="btn">Add Transaction</button>
    </form>
  );
};

export default Transaction;
