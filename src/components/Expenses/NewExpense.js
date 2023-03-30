import { useState } from "react";
import AddNewExpense from "./AddNewExpense";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [addNewExepense, setAddNewExpenseFlag] = useState(true);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };

    setAddNewExpenseFlag(true);

    props.onSaveExpenseItem(expenseData);
  };
 
  
  const displayExpenseForm = () => {
    setAddNewExpenseFlag(false);
  }

  const displayAddNewButton = () => {
    setAddNewExpenseFlag(true);
  }

  
  return (
    <div className="new-expense">
        {addNewExepense && <AddNewExpense onAddNew={displayExpenseForm} />}  
        {!addNewExepense && <ExpenseForm onSaveExpenseData={saveExpenseData} onAddNewButton={displayAddNewButton} />} 
    </div>
  );
};

export default NewExpense;
