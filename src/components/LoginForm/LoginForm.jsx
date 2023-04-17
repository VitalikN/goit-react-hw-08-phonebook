import * as Yup from 'yup';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

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
      <Form>
        <label>
          Email
          <Field name="email" type="text" />
          <ErrorMessage component="span" name="email" />
        </label>

        <label>
          Password
          <Field type="password" name="password" />
          <ErrorMessage component="span" name="password" />
        </label>

        <button variant="outlined" type="submit">
          Save
        </button>
      </Form>
    </Formik>
  );
};
