import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //use states for values that are to be changed
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const submitHandler = (event) => {
    if (!enteredTitle || !enteredAmount || !enteredDate) {
      console.log("not submitted");
      alert("Please fill out all the fields to add an expense");
    } else {
      event.preventDefault();
      console.log("submitted");
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };
      props.onSaveExpenseData(expenseData);
    }

    //clear the text fields
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  //we use this to change the fields
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

/*

    <form>
      <div className="new-expense__controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" />
        </div>
      </div>
        <div className='new-expense__actions'>
        <button type="submit">Add expense</button>
      </div>
    </form>

    */
