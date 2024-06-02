import { useState } from "react"

function App() {

  /*const [ count , setCount] = useState(0)

  const increment = () => {
    setCount( count + 1)
  }
  const decrement = () => {
    setCount( count - 1)
  }
  */

  // Dans le cadre d'un obje //

  const [ person , setperson] = useState({
    firstname : 'Anelka',
    Lastname : 'MD',
    age : 22
  })
  const increment = () => {
    setperson(...person.firstname, person.age + 1)
  }

  

  return <>
    <p>Age de : {person.firstname}</p>
    <button onClick={increment}>Incrementer</button>
  </>
}

export default App
