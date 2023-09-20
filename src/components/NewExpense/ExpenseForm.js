import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [newExpenseTitle, setnewExpenseTitle] = useState("");
  const [newExpenseAmount, setnewExpenseAmount] = useState("");
  const [newExpenseDate, setnewExpenseDate] = useState("");

  //   const [expenseFormObj, setexpenseFormObj] = useState({
  //     newExpenseTitle: "",
  //     newExpenseAmount: "",
  //     newExpenseDate: "",
  //   });

  const handlenewExpenseTitle = (event) => {
    console.log(event.target.value);
    setnewExpenseTitle(event.target.value);
    // setexpenseFormObj((prevState) => {
    //   return {
    //     ...prevState,
    //     newExpenseTitle: event.target.value,
    //   };
    // });
  };

  const handlenewExpenseAmount = (event) => {
    console.log(event.target.value);
    setnewExpenseAmount(event.target.value);
    // setexpenseFormObj((prevState) => {
    //     return {
    //       ...prevState,
    //       newExpenseAmount: event.target.value,
    //     };
    //   });
  };
  const handlenewExpenseDate = (event) => {
    console.log(event.target.value);
    setnewExpenseDate(event.target.value);
    // setexpenseFormObj((prevState) => {
    //     return {
    //       ...prevState,
    //       newExpenseDate: event.target.value,
    //     };
    //   });
  };

  const handleNewExpenseSubmit = (event) => {
    event.preventDefault();

    const newExpenseData = {
      title: newExpenseTitle,
      amount: newExpenseAmount,
      date: new Date(newExpenseDate),
    };
    //console.log(newExpenseData);

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
            min="2022-01-01"
            max="2023-09-01"
            value={newExpenseDate}
            onChange={handlenewExpenseDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
