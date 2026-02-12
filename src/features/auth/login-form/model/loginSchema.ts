import * as yup from 'yup';

export const loginSchema = yup.object({
  login: yup.string().required('Login is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'At least one uppercase letter')
    .matches(/[a-z]/, 'At least one lowercase letter')
    .matches(/[0-9]/, 'At least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'At least one special character')
});

export type TLoginForm = yup.InferType<typeof loginSchema>;
