import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Dagligvarer",
    amount: 120,
    date: new Date(2022, 7, 14),
  },
  { id: "e2", title: "TV", amount: 12000, date: new Date(2023, 2, 12) },
  {
    id: "e3",
    title: "Laptop",
    amount: 4000,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "Elektriker",
    amount: 3000,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpensesn) => {
      return [expense, ...prevExpensesn];
    });
  };

  return (
    <div>
      <h1>Expenses</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
