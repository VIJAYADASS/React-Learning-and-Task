import "./App.css";
import FCApp from "./assets/Day-01 Types of Components/FCApp";
import ParentComponent from "./assets/Day-02  Props/ParentComponentTask";
import Propsapp from "./assets/Day-02  Props/Propsapp";
// import FCApp from "";

function App() {
  return (
    <>
      <h2 className="h2">Function and Class Components </h2>
      <FCApp />
      <h2 className="h2">Props </h2>
      <Propsapp />
      <h2 className="h2">Props Task</h2>
      <ParentComponent />
    </>
  );
}

export default App;
