import React, { ReactNode, useState } from 'react';

import { View } from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';

import { colors } from '@/shared/config';
import { IOption } from '@/shared/model';
import { Icon } from '@/shared/ui';

import { useStyles } from './styles';

interface IProps<T> {
  options: Array<IOption<T>>;
  value?: T | null;
  onChange: (value: T) => void;
  placeholder?: string;
  isFirstDefaultValue?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Select = <T = string,>({
  options,
  value = null,
  onChange,
  placeholder = 'Select item',
  isFirstDefaultValue = false,
  leftIcon,
  rightIcon
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

  const renderLeftIcon = () =>
    leftIcon ? <View style={s.leftIconWrapper}>{leftIcon}</View> : null;

  const renderRightIcon = () => (
    <View style={s.rightIconWrapper(isFocus)}>
      {rightIcon ? (
        rightIcon
      ) : (
        <Icon
          family="entypo"
          name="chevron-small-down"
          size={22}
          color={colors.gray}
        />
      )}
    </View>
  );

  return (
    <Dropdown
      data={options}
      maxHeight={200}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      value={currValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      autoScroll={false}
      mode="auto"
      renderLeftIcon={renderLeftIcon}
      renderRightIcon={renderRightIcon}
      style={[s.dropdown(isFocus)]}
      placeholderStyle={s.placeholderStyle}
      selectedTextStyle={s.selectedTextStyle}
      containerStyle={s.listContainer}
      itemTextStyle={s.itemTextStyle}
    />
  );
};
