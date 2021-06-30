import React, { useEffect, useState } from "react";
import { fetchExpenses } from "../data/utils";

export default function Exercise3() {
  let [month, setMonth] = useState(0);
  let [expenses, setExpenses] = useState([]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    fetchExpenses(month).then(function (value) {
      setExpenses(value);
    });
  }, [month]);

  const changeMonth = (event) => {
    setMonth(event.target.value);
  };
  let i = 0;
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
        <select value={month} onChange={changeMonth}>
          {months.map((m) => (
            <option value={i++}> {m} </option>
          ))}
        </select>
        <div>
          {expenses.map((m) => (
            <div>
              <span>
                Amount: {m.amount} -- Group: {m.group} -- Date: {m.date} --
                Item: {m.item}
              </span>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
