import "./AddNewExpense.css";

const AddNewExpense = (props) => {

    const showExpenseForm = () => {
         props.onAddNew();
    };

  return (
    <div className="new-expense__addnew">
      <button onClick={showExpenseForm}>Add New Expense</button>
    </div>
  );
};

export default AddNewExpense;
