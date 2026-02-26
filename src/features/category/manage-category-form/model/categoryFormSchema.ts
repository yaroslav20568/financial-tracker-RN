import * as yup from 'yup';

export const categoryFormSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Category Name must be at least 3 characters')
    .max(50, 'Category Name must be at most 50 characters')
    .required('Category Name is required')
});

export type TCategoryForm = yup.InferType<typeof categoryFormSchema>;
