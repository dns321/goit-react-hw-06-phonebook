import React from 'react';
import './App.scss';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import Section from './section/Section';

const App = () => {
  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm
        // updateState={this.handleAddContact}
        // checkUniqueContact={this.checkUniqueContact}
        />
        {/* <h2>Contacts</h2>
        <Filter //value={filter} onChange={this.changeFilter}
        /> */}
        {/* <ContactList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        /> */}
      </Section>
    </>
  );
};

export default App;
