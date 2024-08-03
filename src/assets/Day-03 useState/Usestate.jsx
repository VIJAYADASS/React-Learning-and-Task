import { useState } from "react";

function Usestate() {
  const [inc, setInc] = useState(0);

  const handleAdd = () => {
    setInc((currVal) => currVal + 1);
  };

  return (
    <div>
      <p>Current number: {inc}</p>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Usestate;
