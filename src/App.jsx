import { useEffect, useState } from 'react'
import Header from './Header'
import Button from './Button'
import Form from './Form'
import Display from './Display'
import AddressForm from './AddressForm.jsx'
import ContactList from './ContactList.jsx'

function App() {
  const [counter, setCounter] = useState(0)
  console.log(counter)

  const [contacts, setContacts] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/contacts")
    .then(resp => resp.json())
    .then(data => setContacts(data))
    
  }, [])
  
  
  function addContact(contact) {
    setContacts([...contacts, contact])
  }

  function handleClick() {
    return setCounter(counter + 1)
    console.log(handleClick)
  }
 const [calc, setCalc] = useState(0)
  
  function handleSubmit(event) {
    event.preventDefault() 
    setCalc(event.target.value)

  }

  function handleChange(event) {
    setCalc(event.target.value)
  }

  return (
    <>
      <h1>
        <Header counter={counter} />
        <Form calc={calc} handleSubmit={handleSubmit} handleChange={handleChange}/>
        <Display calc={calc} />
        <Button handleClick={handleClick} counter={counter}/> 
        <AddressForm addContact={addContact} />
        <ContactList contacts={contacts} />
      </h1>
    </>
  )
}

export default App