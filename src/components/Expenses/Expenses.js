import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";


export default function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filterExpenses = expenses.filter(expense => {
    return expense.expenseDate.getFullYear().toString() === filteredYear
  });

  return (

    <Card className="expenses">
      <ExpenseFilter defaultYear={filteredYear}
        expenseFilterYear={filterChangeHandler} />
      <ExpenseChart expenses={expenses}></ExpenseChart>
      {filterExpenses.length === 0 && <p>No expenses found</p>}
      {filterExpenses.length > 0 && filterExpenses.map((loop) => (
        <ExpenseItem key={loop.id}
          expense={loop} />
      ))}


    </Card>
  );
}
