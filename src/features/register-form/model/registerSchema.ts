import * as yup from 'yup';

export const registerSchema = yup.object({
  login: yup.string().required('Login is required'),
  accountName: yup.string().required('Account Name is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'At least one uppercase letter')
    .matches(/[a-z]/, 'At least one lowercase letter')
    .matches(/[0-9]/, 'At least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'At least one special character'),
  checkPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Passwords must match')
});

export type TRegisterForm = yup.InferType<typeof registerSchema>;
