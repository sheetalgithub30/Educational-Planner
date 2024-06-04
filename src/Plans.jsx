import React from "react";
import './App.css'

export default function Plans({ subject, hour, increment, decrement, index }) {
  return (
    <div id="plan">
      <p>{subject}</p>
      <p>{hour} Hours </p>
      <div>
      <button id="inc" onClick={() => increment(index)}>➕</button>
      <button id="dec" onClick={() => decrement(index)}>➖</button>
      </div>
      </div>
  );
}
