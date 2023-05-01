import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "./Card";
import ExpensesFilter from "../ExpenseFilter";
import { useState } from "react";

const Expense = (props) => {
  const [filteredyear, setFilteredYear] = useState("2022");
  const filterExpenseHandler = (year) => {
    setFilteredYear(year);
  };
  const filterExpense = props.expenses.filter((ex) => {
    return ex.date.getFullYear().toString() === filteredyear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        set={filteredyear}
        onFilterExpense={filterExpenseHandler}
      />
      {filterExpense.length === 0
        ? "no expenses found"
        : filterExpense.map((exps, index) => (
            <ExpenseItem
              key={exps.id}
              title={exps.title}
              amount={exps.amount}
              date={exps.date}
            />
          ))}

      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      /> */}
    </Card>
  );
};

export default Expense;
