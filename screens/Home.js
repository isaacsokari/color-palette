import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import PalettePreview from '../components/PalettePreview';

import { SOLARIZED, RAINBOW, FRONTEND_MASTERS } from '../constants/colors';

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
  { paletteName: 'Rainbow', colors: RAINBOW },
];

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([]);

  const handleFetchPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (response.ok) {
      const palettes = await response.json();
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    handleFetchPalettes();
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
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
