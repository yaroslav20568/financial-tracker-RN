import { Text, TouchableOpacity, View } from 'react-native';

import { DrawerHeaderProps } from '@react-navigation/drawer';

import { Icon } from '@/shared';

import { useStyles } from './styles';

export const CustomHeaderDrawer = ({
  navigation,
  route
}: DrawerHeaderProps) => {
  const s = useStyles();

  return (
    <View style={s.container}>
      <Text style={s.title}>{route.name}</Text>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={s.menuButton}
        activeOpacity={0.5}
      >
        <Icon family="entypo" name="menu" size={30} />
      </TouchableOpacity>
    </View>
  );
};
