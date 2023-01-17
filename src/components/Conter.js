import React from "react";
import "./Counter.css";
import { increaseValue, decreaseValue } from "../redux/action-creator";
import { useSelector, useDispatch } from "react-redux";

const Conter = () => {
  const myState = useSelector((state) => state.ourState.count);
  console.log("++mystate++", myState);
  const disPatch = useDispatch();
  return (
    <div>
        <div className="parent-div">
        <h1>hello,this is counter</h1>

        </div>
      
      <div className="parent-div">
        <button onClick={() => disPatch(increaseValue())}>increment</button>
        <p>{myState}</p>

        <button onClick={() => disPatch(decreaseValue())}>decrement</button>
      </div>
    </div>
  );
};

export default Conter;
