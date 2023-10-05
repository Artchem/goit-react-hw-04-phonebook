import { useState } from 'react';
import { Container, Text } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useLocalStorage } from 'hooks/useLocalStorage';

// [
// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ]

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const formSubmitHandle = data => {
    const contact = { id: nanoid(5), ...data };
    console.log(data);

    if (contacts.some(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [contact, ...prevState]);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = evt => {
    const { value } = evt.target;
    setFilter(value);
  };

  const handleDeleteContact = contactName => {
    // console.log(contactName);
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.name !== contactName)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <ContactForm onSubmit={formSubmitHandle} />
      <h2>Contacts</h2>

      <Text>Total contacts: {contacts.length}</Text>

      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        options={visibleContacts}
        deleteContact={handleDeleteContact}
      />
    </Container>
  );
}
