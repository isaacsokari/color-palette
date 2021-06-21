import React, { useEffect, useState, useCallback } from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation, route }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const newPalette = route.params ? route.params.newPalette : null;
  const paletteToDelete = route.params ? route.params.paletteToDelete : null;

  useEffect(() => {
    if (newPalette) {
      setColorPalettes((current) => [newPalette, ...current]);
    }
  }, [newPalette]);

  useEffect(() => {
    if (paletteToDelete) {
      setColorPalettes((current) =>
        current.filter((palette) => palette.paletteName !== paletteToDelete),
      );
    }
  }, [paletteToDelete, setColorPalettes]);

  const handleFetchPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (response.ok) {
      const palettes = await response.json();
      setColorPalettes(palettes);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchPalettes();
    setTimeout(() => setIsRefreshing(false), 1000);
  });

  useEffect(() => {
    handleFetchPalettes();
  }, []);

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
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
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AddNewPaletteModal', { colorPalettes })
          }
        >
          <Text style={styles.text}>Add New Color Palette</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#7aea7a',
    borderRadius: 10,
    textAlign: 'center',
  },
});

export default Home;
