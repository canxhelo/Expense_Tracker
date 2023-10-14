import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = (proops) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [visible,setVisible]=useState(false);
    //   const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredDate: "",
    //     enteredAmount: "",
    //   });

    // const titleChangeHandler = (event) => {
    //     setEnteredTitle(event.target.value)
    //     // setUserInput({
    //     //   ...userInput,
    //     //   enteredTitle: event.target.value,
    //     // }); nese ka shum state mund te linde nje bug probleeemmm

    //     //     setUserInput((prevState)=>{
    //     //         return {
    //     //             ...prevState,enteredTitle:event.target.value
    //     //         }
    //     //     })
    //     //   };//keshtu react na garanton qe ky do jet latest dhe do ti mbaj te gjitha statet e tjera te skeduluara SAFE WAY
    // }
    // const dateChangeHandler = (event) => {
    //     setEnteredDate(event.target.value);
    //     //     setUserInput({
    //     //       ...userInput,
    //     //       enteredDate: event.target.value,
    //     //     });
    //     //   };
    // }
    // const amountChangeHandler = (event) => {
    //     setEnteredAmount(event.target.value)
    //     // setUserInput({
    //     //   ...userInput,
    //     //   enteredAmount: event.target.value,
    //     // });
    // }


    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'title') {
            setEnteredTitle(value);
            
        }
        else if (identifier === 'amount') {
            setEnteredAmount(value);
        }
        else if (identifier === 'date'){
            setEnteredDate(value);

        }
    }

    const submitHandler = (event) => {
     
        
        event.preventDefault();


        const expenseData={
            expenseTitle:enteredTitle,
            expenseAmount:enteredAmount,
            expenseDate:new Date(enteredDate)
        }
        proops.onSaveExpenseData(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    const closeForm=()=>{
        setVisible(prev=>!prev)
        proops.closeAddExpense(visible)
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={(event) => {
                            inputChangeHandler('title', event.target.value);
                        }} />
                    </div>

                    <div className="new-expense__control">
                        <label>Ammount</label>
                        <input
                            value={enteredAmount}
                            type="number"
                            min="0.01"
                            step="0.01"
                            onChange={(event) => {
                                inputChangeHandler('amount', event.target.value);
                            }}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input
                        value={enteredDate}
                            type="date"
                            min="2019-01-01"
                            max="2022-12-31"
                            onChange={(event) => {
                                inputChangeHandler('date', event.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                <button type='button' onClick={closeForm}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </>
    );
};


export default ExpenseForm;
