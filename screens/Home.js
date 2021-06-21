import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import PalettePreview from '../components/PalettePreview';

import { SOLARIZED, RAINBOW, FRONTEND_MASTERS } from '../constants/colors';

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
  { paletteName: 'Rainbow', colors: RAINBOW },
];

const Home = ({ navigation }) => {
  return (
    <FlatList
      style={styles.list}
      data={COLOR_PALETTES}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          colorPalette={item}
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
    padding: 10,
  },
});

export default Home;
