import React from "react";

export default function Counter(props) {
  return (
    <>
      <div className="main">
        <button onClick={props.increament}>Increase</button>
        <button onClick={props.decreament}>Decrease</button>
      </div>
      <p className="counter">Count: {props.count}</p>
    </>
  );
}
