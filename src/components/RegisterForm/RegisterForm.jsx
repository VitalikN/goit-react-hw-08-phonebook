import * as Yup from 'yup';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

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
        dispatch(register(values));

        resetForm();
      }}
    >
      <Form>
        <label>
          Username
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          <ErrorMessage component="span" name="name" />
        </label>

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
