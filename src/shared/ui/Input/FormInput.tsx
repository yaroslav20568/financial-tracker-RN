import {
  Control,
  FieldPath,
  FieldValues,
  useController
} from 'react-hook-form';

import { IInputProps, Input } from './Input';

interface IProps<T extends FieldValues> extends Omit<IInputProps, 'error'> {
  control: Control<T>;
  name: FieldPath<T>;
}

export const FormInput = <T extends FieldValues>({
  control,
  name,
  ...inputProps
}: IProps<T>) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error }
  } = useController({
    control,
    name
  });

  return (
    <Input
      {...inputProps}
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      error={error?.message}
    />
  );
};
