import { Container, Title } from './Home.styled';

// import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

export const Home = () => {
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  return (
    <Container>
      <Title>Phonebook</Title>
      {/* <ContactForm />
      <Title>Contacts</Title>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Text>No any contacts in phonebook</Text>
      )} */}

      {/* {isLoading && !error && <b>Request in progress...</b>} */}
    </Container>
  );
};
