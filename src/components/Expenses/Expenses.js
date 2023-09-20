import { useState } from "react";
import ExpensesFilter from "../Filter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const expenses = props.expenses;

  const [filterYear, setFilterYear] = useState("2020");
  const filterExpenseHandler = (selectedYear) => {
    setFilterYear(selectedYear)
  };
  return (
    <Card className="expenses">
      <ExpensesFilter filterYear={filterYear} filterExpenseHandler={filterExpenseHandler} />
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
      />
    </Card>
  );
}

export default Expenses;
