

function App() {

  /*
  const [ count , setCount] = useState(0)

  const increment = () => {
    setCount( count + 1)
  }
  const decrement = () => {
    setCount( count - 1)
  }
  

  // Dans le cadre d'un obje //

  const [ person , setperson] = useState({
    firstname : 'Anelka',
    Lastname : 'MD',
    age : 22
  })
  const increment = () => {
    setperson({...person, age : person.age + 1})
  }

  

  return <>
    <p>Age de {person.firstname} : {person.age}</p>
    <button onClick={increment}>Incrementer</button>
  </>
  ======= creer un champ controler =======
  const [ firstname , setfirstname] = useState('Anelka MD')

  const handelchange = (e) => {
    setfirstname(e.target.value)
  }
  ============================================
  */


  return <form >
    <input type="text" name="Firstname" />
  </form>
}

export default App
