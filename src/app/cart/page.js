//'use client' onclick , useState, useEffect 사용가능 
// 없으면 기본적으로 server component로 사용불가한점이 많음
//server component -> 로딩이 빠름 ,검색엔진 노출에 이점
//client component -> javascript파일이 많이 필요 로딩이 있음,hydration이 생김, 하지만 동작가능
//큰페이지는 server component 기능이 들어간 컴포넌트는 client component 사용하는것을 추천
import {age, name} from "./data.js";


export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <CartItem></CartItem>
    </div>
  )
} 

//next.js 에서는 client component , server component가 있음



function CartItem(){
  return(
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
      <p>import test {age}</p>
      <p>import name {name}</p>
    </div>
  )
}