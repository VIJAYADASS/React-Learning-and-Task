import { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Class Counter: {this.state.count}</p>
        <button className="btn-cc" onClick={this.incrementCount}>
          Increment
        </button>
      </div>
    );
  }
}

export default ClassCounter;
