

export default function Home() {

  const frameWord = "nextJS";
  const URL = "http://google.com"

  return (
    <div>
      <h4 className="title">Apple Store</h4>
      <p className="title-sub">by dev { frameWord }</p>
      <a href={URL}>Link</a>
    </div>
  )
}
