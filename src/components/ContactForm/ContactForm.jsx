import { Notify } from 'notiflix/build/notiflix-notify-aio';
import React from 'react';

import * as Yup from 'yup';
import 'yup-phone-lite';

import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addContact } from 'redux/contacts/operations';
import * as selectors from '../../redux/contacts/selectors';
import { Formik, Form, Field } from 'formik';
import { Box, Button } from '@mui/material';
import { TextField } from 'formik-mui';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const SubmitSchema = Yup.object().shape({
  name: Yup.string().required('Enter contact name'),
  number: Yup.string().phone('UA').required('Enter phone number'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.selectContacts);

  const handleSubmit = newContact => {
    const { name: newName, number: newNumber } = newContact;
    if (
      contacts.find(({ name }) => name === newName) ||
      contacts.find(({ number }) => number === newNumber)
    ) {
      return Notify.failure(
        `${newName} ${newNumber} is already in contacts.
        Please choose other name or number.`,
        {
          position: 'center-center',
          timeout: 1500,
        }
      );
    }

    dispatch(addContact(newContact));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SubmitSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit({
          ...values,
        });
        resetForm();
      }}
    >
      <Form autoComplete="off">
        <Box marginY={1} sx={{ width: 280 }}>
          <Field
            component={TextField}
            type="name"
            label="Name"
            name="name"
            size="small"
            color="secondary"
            fullWidth
          />
        </Box>
        <Box marginY={1} sx={{ width: 280 }}>
          <Field
            component={TextField}
            type="tel"
            label="Number"
            name="number"
            size="small"
            color="secondary"
            fullWidth
          />
        </Box>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          type="submit"
          fullWidth
        >
          <PersonAddAlt1Icon />
        </Button>
      </Form>
    </Formik>
  );
};
