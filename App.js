import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.teal]}>
        <Text style={styles.text}>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  teal: {
    backgroundColor: 'teal',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});
