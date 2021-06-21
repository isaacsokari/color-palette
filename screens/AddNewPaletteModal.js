import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FormItem from '../components/FormItem';

import { COLORS } from '../constants/colors';

const AddNewPaletteModal = ({ navigation, route }) => {
  const [paletteName, setPaletteName] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const handleUpdate = useCallback(
    (color, newValue) => {
      if (newValue === true) {
        setSelectedColors((current) => [...current, color]);
      } else {
        setSelectedColors((current) =>
          current.filter((c) => c.colorName !== color.colorName),
        );
      }
    },
    [selectedColors, setSelectedColors],
  );

  const handleSubmit = useCallback(() => {
    if (!paletteName) {
      Alert.alert('Please add a name to your color palette');
    } else if (
      route.params.colorPalettes.some(
        (palette) => palette.paletteName === paletteName.trim(),
      )
    ) {
      Alert.alert(
        `A palette named "${paletteName}" already exists. Choose another name.`,
      );
    } else if (selectedColors.length < 3) {
      Alert.alert('Please choose at least 3 colors');
    } else {
      navigation.navigate('Home', {
        newPalette: { paletteName: paletteName.trim(), colors: selectedColors },
      });
    }
  }, [paletteName, selectedColors]);

  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Add a Color Palette</Text>
      <TextInput
        value={paletteName}
        onChangeText={setPaletteName}
        placeholder="Color Palette Name"
        style={styles.input}
      />

      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <FormItem
            item={item}
            handleUpdate={(newValue) => handleUpdate(item, newValue)}
            toggleValue={
              !!selectedColors.find(
                (color) => color.colorName === item.colorName,
              )
            }
          />
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Color</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  input: {
    fontSize: 24,
    marginVertical: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 2,
    borderStyle: 'solid',
  },
  button: {
    backgroundColor: 'teal',
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

export default AddNewPaletteModal;
