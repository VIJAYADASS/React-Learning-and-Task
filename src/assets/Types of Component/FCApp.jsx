import ClassComp from "./ClassComponent";
import ClassCounter from "./ClassComponentTask";
import FunctionComponent from "./FunctionComponent ";
import FunctionCounter from "./FunctionComponentTask";

function FCApp() {
  return (
    <div>
      <FunctionComponent />
      <ClassComp />
      <FunctionCounter />
      <ClassCounter />
    </div>
  );
}

export default FCApp;
