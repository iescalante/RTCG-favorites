import React from "react";
import { useStore } from "../hook-store/store";

import "./Counter.css";

const Counter = (props) => {
  const [state, dispatch] = useStore();

  return (
    <div className="counter">
      <p>Counter: {state.counter}</p>
      <button onClick={() => dispatch("ADD", 1)}>ADD 1</button>
      <button onClick={() => dispatch("ADD", 10)}>ADD 10</button>
      <button onClick={() => dispatch("SUBTRACT", 1)}>SUBTRACT 1</button>
      <button onClick={() => dispatch("SUBTRACT", 10)}>SUBTRACT 10</button>
    </div>
  );
};

export default Counter;
