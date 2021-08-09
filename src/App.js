import Income from './components/Income';
import Transaction from './components/Transaction';
import { useGlobalContext } from './context';
function App() {
  const { list, removeItem, balance } = useGlobalContext();
  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <h4>Your balance</h4>
      <h1 id="balance">${balance}.00</h1>
      <Income />
      <h3>History</h3>
      <ul id="list" className="list">
        {list.map((item) => {
          const { id, amount, text } = item;
          return (
            <li key={id} className={parseInt(amount) >= 0 ? 'plus' : 'minus'}>
              {text}
              <span>{`${
                item.amount >= 0 && !item.amount.startsWith('+') ? '+' : ''
              }${amount}`}</span>
              <button
                className="delete-btn"
                onClick={() => removeItem(item.id)}
              >
                &times;
              </button>
            </li>
          );
        })}
      </ul>
      <h3>Add New Transation</h3>
      <Transaction />
    </div>
  );
}
export default App;
