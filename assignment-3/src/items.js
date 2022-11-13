import React from "react";
import Quantity from "./Quantity";
import "./Items.css";

export default function Items(props) {
  let [total, setTotal] = React.useState(0);

  const displayData = props.Items.map((elem, index) => {
    return (
      <div key={index + 1} className="itemCard">
        <p>{elem.name}</p>
        <p>{elem.price}</p>
        <Quantity total={total} setTotal={setTotal} amount={Number(elem.price)} />
      </div>
    );
  });
  return (
    <div>
      {displayData} 
      <p style={{color:"red", fontSize:"30px"}}>Total {total}</p>
    </div>
  );
}