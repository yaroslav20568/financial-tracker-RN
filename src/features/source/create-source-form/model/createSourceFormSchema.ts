import * as yup from 'yup';

export const createSourceFormSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Source Name must be at least 3 characters')
    .required('Source Name is required')
});

export type TCreateSourceForm = yup.InferType<typeof createSourceFormSchema>;
