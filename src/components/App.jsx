import { Component } from 'react';
import ContactForm from './ContactForm.jsx/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addContact = data => {
    if (
      this.state.contacts.some(
        c => c.name.toLowerCase().trim() === data.name.toLowerCase().trim()
      )
    ) {
      alert(`Contact ${data.name} is already exists!`);
      return;
    }
    const newContact = {
      ...data,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };
  handleFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase())
    );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h3>Phone book</h3>
          <ContactForm addContact={this.addContact} />

          <h4>Contacts</h4>
          <Filter onFilterChange={this.handleFilter} value={filter} />
          <ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
