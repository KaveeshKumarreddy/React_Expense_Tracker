import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [newExpenseTitle, setnewExpenseTitle] = useState("");
  const [newExpenseAmount, setnewExpenseAmount] = useState("");
  const [newExpenseDate, setnewExpenseDate] = useState("");

  const handlenewExpenseTitle = (event) => {
    setnewExpenseTitle(event.target.value);
  };

  const handlenewExpenseAmount = (event) => {
    setnewExpenseAmount(event.target.value);
  };
  const handlenewExpenseDate = (event) => {
    setnewExpenseDate(event.target.value);
  };

  const handleNewExpenseSubmit = (event) => {
    event.preventDefault();

    const newExpenseData = {
      title: newExpenseTitle,
      amount: +newExpenseAmount,
      date: new Date(newExpenseDate),
    };

    props.onNewExpenseData(newExpenseData);
    setnewExpenseTitle("");
    setnewExpenseDate("");
    setnewExpenseAmount("");
    
  };

  return (
    <form onSubmit={handleNewExpenseSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={newExpenseTitle}
            onChange={handlenewExpenseTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="100"
            step="10"
            value={newExpenseAmount}
            onChange={handlenewExpenseAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-09-01"
            value={newExpenseDate}
            onChange={handlenewExpenseDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
