import React, { useState } from "react";
import "./ExpensesForm.css";

const ExpensesForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [addedSuccessfully, setAddedSuccessfully] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    if (!props.onSaveExpenseData(expenseData)) {
      setEnteredTitle("");
      setEnteredAmount("");
      if (
        expenseData.date instanceof Date &&
        isFinite(expenseData.date) != false &&
        (expenseData.title.length != 0 && expenseData.amount.length) != 0
      ) {
        const uniqueYears = [
          ...new Set([
            ...props.uniqueYears,
            expenseData.date.toLocaleString("en-US", { year: "numeric" }),
          ]),
        ];
        setEnteredDate("");


        props.setUniqueYears(uniqueYears);
      }
      setAddedSuccessfully(true);
    } else {
      setAddedSuccessfully(false);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangedHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-05-24"
            onChange={dateChangedHandler}
            value={enteredDate}
          />
        </div>
      </div>
      {addedSuccessfully && (
        <div className="warning">
          <p style={{ color: "red", fontSize: "1.2rem", fontWeight: "bold" }}>
            error
          </p>
        </div>
      )}
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpensesForm;
