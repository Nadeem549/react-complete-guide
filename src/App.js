import { useState } from 'react';
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 291.67,
      date: new Date(2023, 2, 25),
    },
    {
      id: 2,
      title: "Bike Insurance",
      amount: 150,
      date: new Date(2023, 2, 24),
    },
    {
      id: 3,
      title: "House Insurance",
      amount: 643.12,
      date: new Date(2023, 2, 23),
    },
  ];

const [updatedExpenses, addNewExpense] = useState(expenses);

  const addExpenseItem = (expenseItem) => {

    addNewExpense((prevState) => {
           return [expenseItem, ...prevState];
    });

  }

  return (
    <div>
      <NewExpense onSaveExpenseItem={addExpenseItem}/>      
      <Expenses items={updatedExpenses}></Expenses>
    </div>
  );
}

export default App;
