import { useDispatch, useSelector } from 'react-redux';
import { Container } from './contacts.styled';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/filter';
import { ContactList } from 'components/СontactsList/СontactsList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Box, Typography } from '@mui/material';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Box
        sx={{
          display: { xs: 'flex' },
          alignItems: 'center',
          flexDirection: 'column',

          justifyContent: 'space-between',
          minWidth: '320px',
          padding: '20px',

          color: '#dcd9df',
        }}
      >
        <Typography variant="h5" sx={{ p: 1.5 }}>
          Add new contact
        </Typography>
        <ContactForm />
        <Typography variant="h5" sx={{ p: 1.5 }}>
          Contacts
        </Typography>
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Typography variant="body1" sx={{ p: 1.5, color: '#cf71e2' }}>
            No any contacts in phonebook
          </Typography>
        )}

        {isLoading && !error && (
          <Typography variant="body1" sx={{ p: 1.5, color: '#cf71e2' }}>
            Request in progress...
          </Typography>
        )}
      </Box>
    </Container>
  );
};
export default Contacts;
