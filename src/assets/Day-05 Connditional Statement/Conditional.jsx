import Ternary from "./Ternary.jsx";
import User from "./User.jsx";

function Conditional() {
  return (
    <div>
      <h2 className="head">Using If Statement </h2>
      <User isLoggedIn={true} username="Cricketer" />
      <h2 className="head">Using Ternary operator</h2>
      <Ternary isLoggedIn={false} username="Wide" />
    </div>
  );
}

export default Conditional;
