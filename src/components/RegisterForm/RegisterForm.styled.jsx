import styled from '@emotion/styled';
import {
  Form as FormikForm,
  Field,
  ErrorMessage as FormikMessage,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  margin-top: 10px;
  
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  width: 300px;
  color: #fff;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #007fff;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  padding: 10px;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 10px;
  background-color: rgb(102, 178, 255);
  transition: 0.5s linear;
  &:focus,
  &:hover {
    color: #0f0f0f;
    outline: none;
    background-color: rgb(255, 255, 255);
  }
`;
export const ErrorMessage = styled(FormikMessage)`
  color: red;
`;
