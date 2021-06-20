import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import ColorBox from './components/ColorBox';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.teal]}>
        <Text style={styles.text}>Here are some boxes of different colors</Text>

        <ColorBox colorName="Cyan" hexCode="#2aa198" />

        <ColorBox colorName="Blue" hexCode="#268bd2" />

        <ColorBox colorName="Magenta" hexCode="#d33682" />

        <ColorBox colorName="Orange" hexCode="#cb4b16" />

        <ColorBox />
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
});
