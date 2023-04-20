

export default function ListPage() {
  const goods1 = 40;
  const goods2 = 50;
  
  return (
    <div>
      <h4 className="title">상품 목록</h4>
      <div className="food">
        <h4>상품1 ${goods1}</h4>
      </div>
      <div className="food">
        <h4>상품2 ${goods2}</h4>
      </div>
    </div>
  )
}
