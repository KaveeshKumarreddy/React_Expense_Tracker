import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

const [addNewExpense,setAddNewExpense] = useState(true);

  const newExpenseDataHandler = (newexpense) => {
    const expenseData = {
      ...newexpense,
      id: Math.random().toString(),
    };
    props.newExpenseHandler(expenseData);
    setAddNewExpense(true)
  };

  const startExpenseHandle = () => setAddNewExpense(false);
  const stopExpenseHandle = () => setAddNewExpense(true);

  return (
    <div className="new-expense">
      {addNewExpense && <button onClick={startExpenseHandle}>Add New Expense</button>}
      {!addNewExpense && <ExpenseForm onCancel={stopExpenseHandle} onNewExpenseData={newExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
