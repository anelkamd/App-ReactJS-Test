

function App() {
  
  /*
  ======= Incrementation===========
  const [ count , setCount] = useState(0)

  const increment = () => {
    setCount( count + 1)
  }
  const decrement = () => {
    setCount( count - 1)
  }
  ================================
  

  // Dans le cadre d'un obje //

  const [ person , setperson] = useState({
    firstname : 'Anelka',
    Lastname : 'MD',
    age : 22
  })
  const increment = () => {
    setperson({...person, age : person.age + 1})
  }

  ===============================
  
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
  const hendelSubmite = (e) => (
    e.preventDefault(),
    console.log(new FormData(e.target))
  )

  return <form onSubmit={hendelSubmite}>
    <input type="text" name="Firstname" defaultValue={'votre nom Svp'}/>
    <button type="button">Envoiyer</button>
  </form>
}

export default App
