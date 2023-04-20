import Link from "next/link";


export default function Home() {

  const frameWord = "nextJS";
  const URL = "http://google.com"

  return (
    <div>
      <div className="navbar">
        <Link href="/">홈</Link>
        <Link href="/list">List</Link>
      </div>
      <h4 className="title">Apple Store</h4>
      <p className="title-sub">by dev { frameWord }</p>
      <a href={URL}>Link</a>
    </div>
  )
}
