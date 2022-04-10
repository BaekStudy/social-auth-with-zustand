import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Container = ({ children, style }) => (
  <View style={{ ...styles.container, ...style }}>{children}</View>
);

export const CenterContainer = ({ children, style }) => (
  <View style={{ ...styles.container, ...styles.center, ...style }}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
