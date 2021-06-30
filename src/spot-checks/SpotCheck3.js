import React, { useState, useEffect } from "react";

export default function SpotCheck3() {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    document.title = `Your likes are : ${likes} likes `;
  });

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 3</h4>
      <div className="exercise" id="sc-3">
        <button onClick={() => setLikes(likes + 1)}>Like</button>
      </div>
    </div>
  );
}
