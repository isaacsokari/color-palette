import React from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    paddingBottom: 140,
  },
  text: {
    color: 'black',
    fontSize: 24,
    marginTop: 16,
    marginHorizontal: 16,
  },
});

const ColorPalette = ({ route }) => {
  const { paletteName, colors } = route.params;

  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(color) => color.colorName}
      renderItem={({ item }) => <ColorBox {...item} />}
      ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
    />
  );
};

export default ColorPalette;
