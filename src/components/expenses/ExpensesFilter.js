import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const options = ["2023", "2022", "2021", "2020"];
  const [isOpen, setIsOpen] = useState(false);
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div
        className="expenses-filter__control"
        onClick={() => setIsOpen(!isOpen)}
      >
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        <svg
          className={`arrow ${isOpen ? "flip" : ""}`}
          width="16"
          height="8"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L5 5L9 1" stroke="#2C2C2C" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default ExpensesFilter;
