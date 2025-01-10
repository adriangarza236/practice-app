import Button from "./Button";
import ContactList from "./ContactList";
import { useState } from "react";



function AddressForm({ addContact }) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

   function handleClick(){

   }


    function handleSubmit(event) {
        event.preventDefault() 
        const options = {
            method: "POST",
            headers: {"Accept": "application/json",
  "Content-Type": "application/json"},
            body: JSON.stringify({
                name,
                phone 
            })
        }
        fetch("http://localhost:3000/contacts", options)
        .then(resp => resp.json())
        .then(data => addContact(data))
    }

   


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>
                    Name:
                    <input
                    type ="text"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                   />
                </label>   
                <label >
                    Phone:
                    <input
                    type ="text"
                    value ={phone}
                    onChange = {(e) => setPhone(e.target.value)}
                   />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddressForm;