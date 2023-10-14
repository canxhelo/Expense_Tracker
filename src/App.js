import Expenses from "./components/Expenses/Expenses";
import React ,{useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";



const Inital_expenses = [
  {
    id: "e1",
    expenseDate: new Date(2021, 2, 25),
    expenseTitle: "Car Insurance",
    expenseAmount: 289.78,
  },
  {
    id: "e2",

    expenseDate: new Date(2021, 8, 15),
    expenseTitle: "Qeraja",
    expenseAmount: 500,
  },
  {
    id: "e3",

    expenseDate: new Date(2020, 8, 15),
    expenseTitle: "Comp",
    expenseAmount: 50,
  },
  {
    id: "e4",

    expenseDate: new Date(2020, 8, 15),
    expenseTitle: "Kot",
    expenseAmount: 532,
  },
];

function App() {

  const [expensess,setExpenses]=useState(Inital_expenses);
  
  
  const addExpenseHandler= expense=>{
    setExpenses((prevExpense)=>{
      console.log(prevExpense);
      return [expense, ...prevExpense];
    });
    console.log(expensess);
  }
  return (
    <div>
      <NewExpense addNewExpense={addExpenseHandler}/>
      <Expenses expenses={expensess}/>
    </div>
  );
}

export default App;
