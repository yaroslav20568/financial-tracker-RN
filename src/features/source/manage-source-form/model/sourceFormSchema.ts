import * as yup from 'yup';

export const sourceFormSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Source Name must be at least 3 characters')
    .max(50, 'Source Name must be at most 50 characters')
    .required('Source Name is required')
});

export type TSourceForm = yup.InferType<typeof sourceFormSchema>;
