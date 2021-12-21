import { setCookies, getCookie, getCookies } from 'cookies-next';



export default function Cart(props) {
  
  const cookies = getCookies()
  console.log(cookies);

  return (
    <>
      <h1>Carrello</h1>
      {Object.keys(cookies).map((e) =>
        <>
          <h2>{e}</h2>
          <h3>{cookies[e]}</h3>
        </>
      )}
    </>
  )
}