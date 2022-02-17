import { Component } from 'react';
import shortID from 'shortid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, phone) => {
    const newContact = { name, phone, id: shortID.generate() };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
    this.setState({ filter: '' });
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const lowerCaseFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(
      ({ name, phone }) =>
        name.includes(lowerCaseFilter) ||
        phone.toLowerCase().includes(lowerCaseFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleChangeFilter} />
        <ContactList contacts={visibleContacts} />
      </div>
    );
  }
}

export default App;
