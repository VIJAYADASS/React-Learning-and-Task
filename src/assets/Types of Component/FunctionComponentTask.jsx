import { useState } from "react";

function FunctionCounter() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Function Counter : {count}</p>
      <button onClick={Increment}>Click me</button>
    </div>
  );
}

export default FunctionCounter;
