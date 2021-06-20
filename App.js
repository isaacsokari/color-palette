import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.teal]}>
        <Text style={styles.text}>Here are some boxes of different colors</Text>

        <View style={[styles.textContainer, styles.cyan]}>
          <Text style={styles.text}>Cyan: #2aa198</Text>
        </View>
        <View style={[styles.textContainer, styles.blue]}>
          <Text style={styles.text}>Blue: #268bd2 </Text>
        </View>
        <View style={[styles.textContainer, styles.magenta]}>
          <Text style={styles.text}>Magenta: #d33682</Text>
        </View>
        <View style={[styles.textContainer, styles.orange]}>
          <Text style={styles.text}>Orange: #cb4b16</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  teal: {
    backgroundColor: 'teal',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
  textContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
});
