import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Clipboard from 'expo-clipboard';

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
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };

  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <TouchableOpacity
      style={[styles.textContainer, boxColor]}
      onPress={() => {
        Clipboard.setString(hexCode);
        Alert.alert('Copied', `Copied Hex Code - "${hexCode}" to clipboard.`);
      }}
    >
      <Text style={[styles.text, textColor]}>
        {colorName}: {hexCode}
      </Text>
    </TouchableOpacity>
  );
};

ColorBox.defaultProps = {
  colorName: 'defaultColor - Black',
  hexCode: '#000',
};

export default ColorBox;
