import Propsapp from "./assets/Prop and JSX/Propsapp";
import Table from "./assets/Types of Component/Fun & Cls Component ";
import EffectsApp from "./assets/UseEffects/EffectsApp";
import "./App.css";
import UseStateApp from "./assets/UseState/UseStateApp";
import UseContextApp from "./assets/UseContext/UseContextApp";

function App() {
  return (
    <>
      <h2 className="h2"> Func and Cls Components : Table</h2>
      <Table />
      <br />
      <h2 className="h2"> Props</h2>
      <Propsapp />
      <br />
      <h2 className="h2">UseState Hook</h2>
      <UseStateApp />
      <br />
      <h2 className="h2">UseEffects Hook</h2>
      <EffectsApp />
      <br />
      <h2 className="h2">UseContext Hook</h2>
      <UseContextApp />
    </>
  );
}

export default App;
