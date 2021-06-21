import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette');
        }}
      >
        <Text
          style={{ fontSize: 24, marginHorizontal: 16, marginVertical: 16 }}
        >
          Solarized
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
