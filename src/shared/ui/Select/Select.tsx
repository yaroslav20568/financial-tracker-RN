import React, { useState } from 'react';

import { Dropdown } from 'react-native-element-dropdown';

import { IOption } from '@/shared/model';

import { useStyles } from './styles';

interface IProps<T> {
  options: Array<IOption<T>>;
  value?: T | null;
  onChange: (value: T) => void;
  placeholder?: string;
  isFirstDefaultValue?: boolean;
}

export const Select = <T = string,>({
  options,
  value = null,
  onChange,
  placeholder = 'Select item',
  isFirstDefaultValue = false
}: IProps<T>) => {
  const s = useStyles();
  const [currValue, setCurrValue] = useState(
    isFirstDefaultValue ? options[0].value : value
  );
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => setIsFocus(true);

  const handleBlur = () => setIsFocus(false);

  const handleChange = (item: IOption<T>) => {
    if (item.value !== currValue) {
      onChange(item.value);
      setCurrValue(item.value);
      setIsFocus(false);
    }
  };

  return (
    <Dropdown
      data={options}
      maxHeight={200}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      value={currValue}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      autoScroll={false}
      mode="auto"
      style={[s.dropdown(isFocus)]}
      placeholderStyle={s.placeholderStyle}
      selectedTextStyle={s.selectedTextStyle}
      containerStyle={s.listContainer}
      itemTextStyle={s.itemTextStyle}
    />
  );
};
