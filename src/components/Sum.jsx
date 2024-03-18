import React from "react";

export default function Sum(props) {
  return (
    <div className="sumContainer">
      <button onClick={props.toggleButton}>{props.buttonText}</button>
      <p className="heading">{props.text}</p>
      <input
        type="text"
        placeholder="Operand 1"
        onChange={(e) => props.setOperandOne(e.target.value)}
      />
      <input
        type="text"
        placeholder="Operand 2"
        onChange={(e) => props.setOperandTwo(e.target.value)}
      />
      <button onClick={props.handleSum} disabled={!props.buttonEnabled}>
        Add Operands
      </button>
      <p className="sum">{props.sum}</p>
    </div>
  );
}
