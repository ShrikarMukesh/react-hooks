import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };
  render() {
    return (
      <div>
        <button onClick={this.increment}>click {this.state.count}</button>
      </div>
    );
  }
}

export default ClassCounter;
