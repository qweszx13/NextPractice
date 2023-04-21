

export default function ListPage() {
  const structures = ['Tomato', 'Pasta', 'Coconut'];
  const costs = [40, 50, 100]

  
  return (
    <div>
      <h4 className="title">상품 목록</h4>
      {
        structures.map((i,index)=>{
          return(
            <div className="food">
              <h4>{i} is{costs[index]}$</h4>
            </div>
          )
        })
      }
    </div>
  )
}
