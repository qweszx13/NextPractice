'use client'

import Image from "next/image";
import { useState } from "react";
import food0 from "/public/food0.png";
import food1 from "/public/food1.png";
import food2 from "/public/food2.png";


export default function ListPage() {
  const structures = ['Tomato', 'Pasta', 'Coconut'];
  const costs = [40, 50, 100];
  const images = [food0, food1, food2];
  const [amount, setAmount] = useState([0, 0, 0]);

  return (
    <div>
      <h4 className="title">structure List</h4>
      {
        structures.map((structure,index)=>{
          return(
            <div className="food" key={index}>
              <Image src={images[index]} alt={structure} className="food-img"></Image>
              <h4>{structure} is{costs[index]}$</h4>
              <span> {amount[index]} </span>
              <button onClick={()=>{
                let copy = [...amount]
                copy[index]++
                setAmount(copy)
              }}>+</button>
              <button onClick={()=>{
                let copy = [...amount]
                copy[index]--
                setAmount(copy)
              }}>-</button>
            </div>
          )
        })
      }
    </div>
  )
}
