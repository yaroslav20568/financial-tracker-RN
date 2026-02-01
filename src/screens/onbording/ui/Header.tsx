import React from 'react';

import { View, Text } from 'react-native';

import { StyleSheet } from 'react-native-unistyles';

export const Header = () => {
  return (
    <View>
      <View>
        <View />
        <Text style={styles.title}>Finance Tracker</Text>
      </View>
      <Text style={styles.title}>Start Managing Your Finances</Text>
      <Text style={styles.description}>
        Create your secure account to track expenses, manage budgets, and
        achieve your financial goals.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create(theme => {
  const { colors, fonts } = theme;

  return {
    title: {
      fontSize: 36,
      fontFamily: fonts.interBold,
      color: colors.black,
      marginBottom: 12
    },
    description: {
      fontSize: 18,
      lineHeight: 26,
      fontFamily: fonts.interRegular,
      color: colors.gray
    }
  };
});
