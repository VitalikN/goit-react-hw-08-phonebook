import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { TextField } from 'formik-mui';
import { Box, Button } from '@mui/material';

const FormikSchema = Yup.object().shape({
  name: Yup.string().required('Enter contact name'),
  email: Yup.string().nullable().email().required('Enter email'),
  password: Yup.string()
    .min(2 | 'Password must be at least 8 characters long')
    .max(
      16 | 'The maximum length of the password must not exceed 16 characters'
    )
    .required('Enter password'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={FormikSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        dispatch(register(values));

        resetForm();
      }}
    >
      <Form>
        <Box marginY={1} sx={{ width: 280 }}>
          <Field
            component={TextField}
            label="Username"
            color="secondary"
            size="small"
            type="text"
            name="name"
            fullWidth
          />
        </Box>
        <Box marginY={1}>
          <Field
            component={TextField}
            label="Email"
            size="small"
            color="secondary"
            name="email"
            type="text"
            fullWidth
          />
        </Box>

        <Box marginY={1}>
          <Field
            component={TextField}
            label="Password"
            size="small"
            color="secondary"
            type="password"
            name="password"
            fullWidth
          />
        </Box>
        <Button variant="contained" color="secondary" type="submit" fullWidth>
          Register
        </Button>
      </Form>
    </Formik>
  );
};
