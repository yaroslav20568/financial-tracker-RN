import { Text, View } from 'react-native';

import { DrawerHeaderProps } from '@react-navigation/drawer';

import { IconButton } from '@/shared';

import { useStyles } from './styles';

export const CustomHeaderDrawer = ({
  navigation,
  route
}: DrawerHeaderProps) => {
  const s = useStyles();

  const showDrawer = () => navigation.openDrawer();

  return (
    <View style={s.container}>
      <Text style={s.title}>{route.name}</Text>
      <IconButton family="entypo" name="menu" size={30} onPress={showDrawer} />
    </View>
  );
};
