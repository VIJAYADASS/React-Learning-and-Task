import ClassComp from "./ClassComponent";
import ClassCounter from "./ClassComponentTask";
import FunctionComponent from "./FunctionComponent ";
import FunctionCounter from "./FunctionComponentTask";

function FCApp() {
  return (
    <div>
      <FunctionComponent />
      <ClassComp />
      <h2 className="h2">Function and Class Component Task</h2>
      <FunctionCounter />
      <ClassCounter />
    </div>
  );
}

export default FCApp;
