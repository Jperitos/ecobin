import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HelpCenterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Help Center</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
  },
});
