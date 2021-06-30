import React, { useState, useEffect } from "react";
const axios = require("axios");
export default function Exercise2() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5").then((res) => {
      setUsers(res.data.results);
    });
  }, []);
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2"></div>
      {users.map((u) => (
        <div>
          {u.name.first} -- {u.name.last}
          <br />
          <img src={u.picture.thumbnail} />
        </div>
      ))}
    </div>
  );
}
