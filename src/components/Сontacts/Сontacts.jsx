import React from 'react';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { ContactListItem } from './ContactListItem ';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
