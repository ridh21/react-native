import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
    <View style={tw`flex-1 items-center justify-center bg-blue-500`}>
      <Text style={tw`text-white text-lg font-bold`}>Hello, Its me Ridham Patel</Text>
    </View>
  );
}
