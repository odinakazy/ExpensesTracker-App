import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTItle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isDeleting, setIsDeleting] = useState(true);
  const titleChangeHandler = (e) => {
    setEnteredTItle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  //   console.log(enteredTitle, enteredAmount, enteredDate);
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpense(expenseData);
    setEnteredTItle("");
    setEnteredAmount("");
    setEnteredDate("");

    setIsDeleting(false);
  };
  const deleteform = () => {
    setIsDeleting(false);
  };
  const Addform = () => {
    setIsDeleting(true);
  };
  return (
    <div>
      {isDeleting ? (
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
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2022-01-01"
                max="2025-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expenses__actions">
            <button type="button" onClick={deleteform}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        <button onClick={Addform}>Add New Expense</button>
      )}
    </div>
  );
}

export default ExpenseForm;
