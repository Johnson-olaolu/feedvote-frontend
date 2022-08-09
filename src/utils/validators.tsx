import * as yup from 'yup';

export const loginValidator = yup.object().shape({
  email: yup.string().email('Enter valid email').required('Please enter email'),
  password: yup.string().min(6, 'Minimum of 6 characters').required('Please enter password'),
});

export const registerValidator = yup.object().shape({
    email: yup.string().email('Enter valid email').required('Please enter email'),
    password: yup.string().min(6, 'Minimum of 6 characters').required('Please enter password'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Please confirm password'),
});