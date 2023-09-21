import { useState } from "react";
import ExpensesFilter from "../Filter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const expenses = props.expenses;

  const [filterYear, setFilterYear] = useState("2020");
  const filterExpenseHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterYear={filterYear}
        filterExpenseHandler={filterExpenseHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
