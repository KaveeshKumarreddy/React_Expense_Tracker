import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const newExpenseDataHandler = (newexpense) => {
    const expenseData = {
      ...newexpense,
      id: Math.random().toString(),
    };

    props.newExpenseHandler(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onNewExpenseData={newExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
