import React, { useState } from "react";

function HookCounterTwo() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  const fiveIncrement = () => {
    setCount(count + 5);
  };
  return (
    <div>
      Count: {count} <br />
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={fiveIncrement}>Increment 5 </button>
    </div>
  );
}

export default HookCounterTwo;
