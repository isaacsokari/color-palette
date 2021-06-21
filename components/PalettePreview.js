import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PalettePreview = ({ colorPalette, handlePress }) => {
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.text}>{colorPalette.paletteName}</Text>
        <FlatList
          style={[styles.list, { marginLeft: styles.text.marginHorizontal }]}
          data={colorPalette.colors.slice(0, 5)}
          keyExtractor={(item) => item.colorName}
          renderItem={({ item }) => (
            <View
              style={[styles.box, { backgroundColor: item.hexCode }]}
            ></View>
          )}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 16,
    // marginVertical: 16,
  },
  box: {
    height: 30,
    width: 30,
    marginRight: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  list: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default PalettePreview;
