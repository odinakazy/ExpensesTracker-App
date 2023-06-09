import React from "react";
import NewExpense from "./components/NewExpense";
import Expense from "./components/Expense";
import { useState } from "react";
const demoExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(demoExpenses);
  const saveExpenseDataHandler = (exp) => {
    setExpenses((prevExpense) => {
      return [exp, ...prevExpense];
    });
  };

  return (
    <>
      <NewExpense onSaveExpenseData={saveExpenseDataHandler} />
      <Expense expenses={expenses} />
    </>
  );
}

export default App;
