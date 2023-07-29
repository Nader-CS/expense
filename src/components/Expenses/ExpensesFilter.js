import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
    console.log("filter changed!");
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {props.yearsList.length > 0 ? (
            props.yearsList.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))
          ) : (
            <option></option>
          )}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
