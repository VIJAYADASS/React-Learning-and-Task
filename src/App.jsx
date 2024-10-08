import "./App.css";
import Conditional from "./assets/Day-05 Connditional Statement/Conditional";
import FCApp from "./assets/Day-01 Types of Components/FCApp";
import ParentComponent from "./assets/Day-02  Props/ParentComponentTask";
import Propsapp from "./assets/Day-02  Props/Propsapp";
import UseStateApp from "./assets/Day-03 useState/UseStateApp";
import EffectsApp from "./assets/Day-04 useEffects/EffectsApp";
import FetchData from "./assets/Day-04 useEffects/useEffectsFirstTask";
import CountdownTimer from "./assets/Day-04 useEffects/useEffectsSecondTask";
import ListandKeys from "./assets/Day-05 List and keys/ListsandKeys";
import TaskList from "./assets/Day-05 List and keys/TaskList";
import EventsSync from "./assets/Day-06 Events Handler/EventsSynchronomous";
import EventsAsync from "./assets/Day-06 Events Handler/EventsAsynchronomous";

function App() {
  return (
    <>
      <h2 className="h2">Function and Class Components </h2>
      <FCApp />
      <h2 className="h2">Props </h2>
      <Propsapp />
      <h2 className="h2">Props Task</h2>
      <ParentComponent />
      <h2 className="h2">useState Hook</h2>
      <UseStateApp />
      <h2 className="h2">useEffects Hook</h2>
      <EffectsApp />
      <h2 className="h2">useEffects Task</h2>
      <h2 className="head">Fetch data from an API </h2>
      <FetchData />
      <h2 className="head">CounterTimer</h2>
      <CountdownTimer />
      <h2 className="h2">Conditional Statement</h2>
      <Conditional />
      <h2 className="h2">List and Keys</h2>
      <ListandKeys />
      <h2 className="h2">List and Keys Task</h2>
      <TaskList />
      <h2 className="h2">Events Handling</h2>
      <EventsSync />
      <EventsAsync />
    </>
  );
}

export default App;
