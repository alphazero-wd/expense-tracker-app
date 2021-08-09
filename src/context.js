import React, { useContext, useEffect, useState } from 'react';
const AppContext = React.createContext();
const getList = () => {
  if (localStorage.getItem('list') !== null) {
    const items = JSON.parse(localStorage.getItem('list'));
    return items;
  } else {
    return [];
  }
};
const AppProvider = ({ children }) => {
  const [item, setItem] = useState({ text: '', amount: '' });
  const [list, setList] = useState(getList());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setItem({ ...item, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (item.text && item.amount) {
      setList([...list, { id: new Date().getTime().toString(), ...item }]);
      setItem({ text: '', amount: '' });
    } else {
      alert('Please add a text and amount');
    }
  };

  const removeItem = (id) => {
    const remainingItem = list.filter((item) => item.id !== id);
    setList(remainingItem);
  };

  const getIncome = () => {
    const newIncome = list
      .filter((item) => parseInt(item.amount) >= 0)
      .reduce((total, item) => {
        total += parseInt(item.amount);
        return total;
      }, 0);
    setIncome(newIncome);
  };

  const getExpense = () => {
    const newExpense = list
      .filter((item) => parseInt(item.amount) < 0)
      .reduce((total, item) => {
        total += parseInt(item.amount);
        return total;
      }, 0);
    setExpense(newExpense);
  };

  const getBalance = () => {
    const newBalance = income + expense;
    setBalance(newBalance);
  };

  useEffect(() => {
    getIncome();
    getExpense();
    getBalance();
    localStorage.setItem('list', JSON.stringify(list));
  }, [list, income, expense]);

  return (
    <AppContext.Provider
      value={{
        list,
        setList,
        income,
        setIncome,
        expense,
        setExpense,
        item,
        setItem,
        onChange,
        onSubmit,
        removeItem,
        balance,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
export default AppProvider;
