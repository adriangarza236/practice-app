

function ContactList({ contacts }) {
    const contactCards = contacts.map(contact => <li key={contact.id}>Name: {contact.name} Phone: {contact.phone}</li>)
    return (
        <div>
            <h1>Contact List:</h1>
            <ul>
                {contactCards}
            </ul>
        </div>
    )
}

export default ContactList;