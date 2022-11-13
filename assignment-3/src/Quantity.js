import React from "react";
import './Quantity.css'

export default function Quantity({total, setTotal, amount}) {
    let [count, setCount] = React.useState(0)

    const increaseCount = () => {
      count++;
        setCount(count);
        // let temp = amount;
        total+=amount
        setTotal(total)
      }
      
      const decreaseCount = () => {
      count--;
        setCount(count);
        // let temp = amount;
        total-=amount
        setTotal(total)
    }

  return (
    <div className="quantity">
      <button className="quantityChange" disabled={count<=0? true:false} style={count<=0? {color: "gray"}:{color:"red"}} onClick={decreaseCount}>-</button>
      <p id="Count">{count}</p>
      <button className="quantityChange" disabled={count>=20? true:false} style={count>=20? {color: "gray"}:{color:"red"}} onClick={increaseCount}>+</button>
    </div>
  );
}