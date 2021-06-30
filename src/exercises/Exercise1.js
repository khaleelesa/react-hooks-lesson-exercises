import React, { useState, useEffect } from "react";

export default function Exercise1() {
  const [user, setUser] = useState({ name: "", city: "", country: "" });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const countries = ["united states", "china", "united kingdom", "australia"];
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input value={user.name} name="name" onChange={handleChange}></input>
        <input value={user.city} name="city" onChange={handleChange}></input>
        <select
          id="select-input"
          value={user.country}
          name="country"
          onChange={handleChange}
        >
          {countries.map((c) => (
            <option value={c}> {c} </option>
          ))}
        </select>
      </div>
    </div>
  );
}
