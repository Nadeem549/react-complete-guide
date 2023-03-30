import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [newSelectedYear, setSelectedYear] = useState("2020");

  const yearSelectedFromFilter = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === newSelectedYear && expense;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearSelectedFromFilter={yearSelectedFromFilter}
        selectedYear={newSelectedYear}
      ></ExpensesFilter>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
};

export default Expenses;
