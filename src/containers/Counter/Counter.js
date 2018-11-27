import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {this.props.storedResults.map(result => {
            return (
              <li key={result.id} onClick={this.props.onDeleteResult}>
                {result.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter, //from reducer file
    storedResults: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }), //connect method is calling the mapDispatch function, returning/making available each of these that is "type' in the reducer, which I can passed additional payload for the reducer to have/control, and then return back after it does what it does
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: () => dispatch({ type: "ADD", value: 5 }),
    onSubtractCounter: () => dispatch({ type: "SUBTRACT", value: 5 }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: () => dispatch({ type: "DELETE_RESULT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter); //either can be null if you only need a slice of state or just an action
