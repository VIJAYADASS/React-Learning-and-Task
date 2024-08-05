import { useEffect, useState } from "react";

//The UseEffects Hook allow you to perform the side effect in your component.
function UseEffects() {
  const [num1, setNum1] = useState(50);

  //In useEffect, after setting the value of the first parameter, the webpage should reload in a fraction of a second.
  //useEffect runs only once when the second parameter is an empty array [].
  // When the dependency array is empty, after you reload the webpage, only the value will change; useEffect will not run again.

  useEffect(() => {
    //First Parameter
    setNum1(51);
    console.log("Effects");

    return () => {
      //The return function sets num1 back to 50 and logs "Memory cleaned here".
      //  This function runs when the component is unmounted or before the next effect runs if num1 changes.
      setNum1(50);
      console.log("Memory cleaned here");
    };
  }, [num1]); //Second Parameter
  // In the second parameter, we should set the variable in the dependency array. After reloading the webpage, the values will change and useEffect will rerun, causing the variable to update with the new value."
  console.log("num1", num1);
  return (
    <div>
      <h3>{num1}</h3>
      <button
        className="useeffects"
        onClick={() => setNum1((curVal) => curVal + 1)}
      >
        Add
      </button>
    </div>
  );
}

export default UseEffects;
