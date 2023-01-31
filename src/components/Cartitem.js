import React from "react";
import foodImage from "./5.jpg";

function Cartitem(props) {
  return (
    <>
    <div className="container">
    {props.myStyle.map(element=>{
      return <div className="box container">
      <span className="box-number">{element.id}</span>
      <p className="food-time">{element.time}</p>
      <h1>{element.name}</h1>
      <p className="food-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium nemo officiis ut enim illo id optio, earum ducimus
        itaque magni quisquam adipisci quod! Enim officia, iusto excepturi
        aliquam sequi veritatis.
      </p>
      <div className="img-box">
        <div className="img-box1" alt="">
          <img src={element.imgUrl} alt="" />
        </div>
        <div className="img-box2">
          <button className="btn">Order</button>
        </div>
      </div>
    </div>
    })}
    </div>
    </>
    
  );
}

export default Cartitem;
