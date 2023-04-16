import * as Yup from 'yup';
import { Field, Form, Formik, ErrorMessage } from 'formik';

const FormikSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required('Enter phone number'),
});

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        //   id: nanoid(),
        number: '',
        email: '',
      }}
      // onSubmit={(values, { resetForm }) => {
      //   handleSubmit({
      //     ...values,
      //   });
      //   resetForm();
      //   onClose();
      // }}
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
