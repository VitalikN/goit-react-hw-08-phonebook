import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { TextField } from 'formik-mui';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const FormikSchema = Yup.object().shape({
  email: Yup.string().nullable().email().required('Enter email'),
  password: Yup.string()
    .min(2 | 'Password must be at least 8 characters long')
    .max(
      16 | 'The maximum length of the password must not exceed 16 characters'
    )
    .required('Enter password'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, { resetForm }) => {
        dispatch(logIn(values));

        resetForm();
      }}
      validationSchema={FormikSchema}
    >
      <Form autoComplete="off">
        <Box marginY={1} sx={{ width: 280 }}>
          <Field
            component={TextField}
            label="Email"
            size="small"
            name="email"
            type="text"
            fullWidth
            color="secondary"
          />
        </Box>
        <Box marginY={1}>
          <Field
            component={TextField}
            size="small"
            color="secondary"
            label="Password"
            type="password"
            name="password"
            fullWidth
          />
        </Box>

        <Button variant="contained" color="secondary" type="submit" fullWidth>
          Log In
        </Button>
      </Form>
    </Formik>
  );
};
