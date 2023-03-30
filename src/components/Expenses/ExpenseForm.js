import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //  const [userInputObj, setUserInputObj] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  //   });

  const titleChange = (event) => {
    // setUserInputObj({
    //     ...userInputObj,
    //     enteredTitle: event.target.value
    // });
    setEnteredTitle(event.target.value);
  };
  const amountChange = (event) => {
    // setUserInputObj({
    //     ...userInputObj,
    //     enteredAmount: event.target.value
    // });
    setEnteredAmount(event.target.value);
  };
  const dateChange = (event) => {
    // setUserInputObj({
    //     ...userInputObj,
    //     enteredDate: event.target.value
    // });
    setEnteredDate(event.target.value);
  };

  const expenseFormSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const expenseFormCancel = () => {
      props.onAddNewButton();
  }

  return (
    <form onSubmit={expenseFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChange}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChange}
            min="0.01"
            step="0.01"
            value={enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChange}
            min="2020-01-01"
            max="2023-3-25"
            value={enteredDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={expenseFormCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
