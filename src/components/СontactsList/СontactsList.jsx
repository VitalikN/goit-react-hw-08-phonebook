import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { ContactListItem } from './ContactListItem ';
import { Box, List } from '@mui/material';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <Box component="div" sx={{ mt: 1, width: '100%', maxWidth: 300 }}>
      <List>
        {visibleContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </List>
    </Box>
  );
};
