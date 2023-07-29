import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(() => {
    if (props.items.length > 0) {
      const years = props.items.map((expense) =>
        expense.date.toLocaleString("en-US", { year: "numeric" })
      );
      return Math.min(...years);
    } else {
      return "";
    }
  });
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
          yearsList={props.uniqueYears}
          setItems={props.setItems}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList
          items={filteredExpenses}
          changeYearsList={props.setUniqueYears}
        />
      </Card>
    </div>
  );
};

export default Expenses;
