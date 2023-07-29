import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpenses/NewExpense";
import DeleteExpenses from "./components/DeleteExpenses/DeleteExpenses";
const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setisDeleting] = useState(false);
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);
  const [uniqueYears, setUniqueYears] = useState(() => {
    if (expenses.length > 0) {
      const years = expenses.map((expense) =>
        expense.date.toLocaleString("en-US", { year: "numeric" })
      );
      const uniqueYears = [...new Set(years)];
      return uniqueYears;
    } else {
      return [];
    }
  });
  const addExpenseHandler = (expense) => {
    if (expense.title.length == 0 || expense.amount.length == 0) {
      console.log(expense);
      return false;
    } else {
      setExpenses((oldExpense) => {
        return [...oldExpense, expense];
      });
      return true;
    }
  };
  const deleteExpenseHandler = (expenseName) => {
    console.log();
    if (
      expenses.find(
        (expense) => expense.title.toLowerCase() == expenseName.toLowerCase()
      ) == undefined
    ) {
      return false;
    } else {
      setExpenses((oldExpense) => {
        return oldExpense.filter((expense) => {
          return expense.title.toLowerCase() != expenseName;
        });
      });
      return true;
    }
  };
  return (
    <div>
      <div className="expense-actions">
        {!isDeleting && (
          <NewExpense
            onAddExpense={addExpenseHandler}
            EditingChange={setIsEditing}
            isEditing={isEditing}
            setUniqueYears={setUniqueYears}
            uniqueYears={uniqueYears}
            setItems={setExpenses}
          />
        )}
        {!isEditing && (
          <DeleteExpenses
            isDeleting={isDeleting}
            editIsDeletingChange={setisDeleting}
            items={expenses}
            DeleteExpense={deleteExpenseHandler}
          />
        )}
      </div>
      <Expenses
        items={expenses}
        uniqueYears={uniqueYears}
        setUniqueYears={setUniqueYears}
        setItems={setExpenses}
      />
    </div>
  );
};

export default App;
