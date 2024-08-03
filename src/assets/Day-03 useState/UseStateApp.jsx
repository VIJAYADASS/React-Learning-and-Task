import Counter from "./FirstTask";
import Form from "./SecondTask";
import Usestate from "./Usestate";

function UseStateApp() {
  return (
    <div>
      <Usestate />
      <h2 className="head">Increment and Decrement Task</h2>
      <Counter />
      <br />
      <h2 className="head">Simple Form</h2>
      <Form />
    </div>
  );
}

export default UseStateApp;
