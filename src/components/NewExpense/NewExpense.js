/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const newExpense = (props) => {  

const [visible, setVisible] = useState(false)

 const saveExpenseHandler=(enteredExpenseData) => {
  const expenseData={
    ...enteredExpenseData,
    id:Math.random().toString(),
  }
  props.addNewExpense(expenseData)
 }
 const addExpense=(value) => {
  setVisible(value)
 }

  return (
    <>
      <div className="new-expense">
        {visible?<ExpenseForm closeAddExpense={addExpense} onSaveExpenseData={saveExpenseHandler}/>:<button type='button' onClick={addExpense}> Add Expense</button>}
         
      </div>
    </>
  );
};

export default newExpense;


//jemi ne linjen qe butoni kur kikohet shfaqet forma 