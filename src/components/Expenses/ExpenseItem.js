import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

export default function ExpenseItem({ expense }) {
console.log(expense);
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={expense.expenseDate} />
      <div className="expense-item__description">
        <h2>{expense.expenseTitle}</h2>
        <div className="expense-item__price">{`$` + expense.expenseAmount}</div>
      </div>
    </Card>
  );
}
