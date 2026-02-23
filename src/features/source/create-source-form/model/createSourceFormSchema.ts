import * as yup from 'yup';

export const createSourceFormSchema = yup.object({
  name: yup.string().required('Source Name is required')
});

export type TCreateSourceForm = yup.InferType<typeof createSourceFormSchema>;
