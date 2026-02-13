import * as yup from 'yup';

export const editAccountSchema = yup.object({
  name: yup.string().required('Account Name is required')
});

export type TEditAccountForm = yup.InferType<typeof editAccountSchema>;
