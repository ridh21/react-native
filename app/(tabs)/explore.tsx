import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
    <View style={tw`flex-1 items-center justify-center bg-orange-400`}>
      <Text style={tw`text-white text-lg font-bold`}>Welocme to explore page</Text>
    </View>
  );
}
