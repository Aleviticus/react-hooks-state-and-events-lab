import React from "react";
import { useState } from "react"; 



function Item({ name, category }) {

  const [isIncart, setIsInCart] = useState(true)
  function handleClick(){
    setIsInCart((isIncart) => !isIncart)
    console.log('cart is clicked')
  }

  const buttonText = isIncart ? "Add to Cart" : "Remove From Cart "

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* 
      Implement ternary to change button's text based on
      value of `isInCart`. 
      */}
      <button onClick={handleClick} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
