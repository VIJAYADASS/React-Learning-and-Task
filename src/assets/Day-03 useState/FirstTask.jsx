// Task 1

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="buttonContainer">
      <p>Current number:{count} </p>
      <button className="firstTask" onClick={increment}>
        Increment
      </button>
      <button className="firstTask" onClick={decrement}>
        Decrement
      </button>
      <button className="firstTask" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
