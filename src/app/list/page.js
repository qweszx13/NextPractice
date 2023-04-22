import Image from "next/image";
import food0 from "/public/food0.png";
import food1 from "/public/food1.png";
import food2 from "/public/food2.png";


export default function ListPage() {
  const structures = ['Tomato', 'Pasta', 'Coconut'];
  const costs = [40, 50, 100];
  const images = [food0, food1, food2];

  
  return (
    <div>
      <h4 className="title">structure List</h4>
      {
        structures.map((structure,index)=>{
          return(
            <div className="food" key={index}>
              <Image src={images[index]} alt={structure} className="food-img"></Image>
              <h4>{structure} is{costs[index]}$</h4>
            </div>
          )
        })
      }
    </div>
  )
}
