import { useState } from "react"

function App() {

  const [ count , setCount] = useState(0)

  const increment = () => {
    setCount( count + 1)
  }
  const decrement = () => {
    setCount( count - 1)
  }

  return <>
    <p>Compteur : {count}</p>
    <button onClick={increment}>Incrementer</button>
    <button onClick={decrement}>decrementer</button>

  </>
}

export default App
