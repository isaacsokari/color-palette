import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const FormItem = ({ item, handleUpdate, toggleValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>{item.colorName}</Text>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={[{ backgroundColor: item.hexCode }, styles.preview]} />
        <Switch value={toggleValue} onValueChange={handleUpdate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginVertical: 16,
  },
  smallText: {
    fontSize: 18,
  },
  input: {
    fontSize: 24,
    marginVertical: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 2,
    borderStyle: 'solid',
  },
  preview: {
    marginLeft: 'auto',
    width: 80,
    height: 40,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default FormItem;
