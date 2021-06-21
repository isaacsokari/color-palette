import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import ColorBox from '../components/ColorBox';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 24,
    marginTop: 16,
    marginHorizontal: 16,
  },
  button: {
    // flex: 1,
    backgroundColor: 'orangered',
    borderRadius: 8,
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
});

const ColorPalette = ({ navigation, route }) => {
  const { paletteName, colors } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={colors}
        keyExtractor={(color) => color.colorName}
        renderItem={({ item }) => <ColorBox {...item} />}
        ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
        ListHeaderComponentStyle={{ flex: 1, marginBottom: 20 }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Alert.alert('Are you sure?', `Delete palette: "${paletteName}?"`, [
            {
              text: 'Yes, Delete',
              style: 'destructive',
              onPress: () => {
                navigation.navigate('Home', { paletteToDelete: paletteName });
              },
            },
            {
              text: 'No, Cancel',
              style: 'cancel',
            },
          ]);
        }}
      >
        <Text style={styles.buttonText}>Delete Palette</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ColorPalette;
