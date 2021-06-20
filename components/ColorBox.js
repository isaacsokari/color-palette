import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
});

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };

  return (
    <View style={[styles.textContainer, boxColor]}>
      <Text style={styles.text}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

ColorBox.defaultProps = {
  colorName: 'defaultColor - Black',
  hexCode: '#000',
};

export default ColorBox;
