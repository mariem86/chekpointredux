import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../reduxComponet/Action";


const Counter = ({ increment, decrement, count }) => (
  <div className="wrap">
  
  <div className="wrap-btns">
    <button className="increment"   onClick={increment}>+</button>
     <span >{count}</span>
    <button className="decrement"  onClick={decrement}>-</button>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
