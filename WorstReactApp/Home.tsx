import React from "react";
import { View, Text, Button } from "react-native";

import { StackNavigationProp } from '@react-navigation/stack';

type HomeProps = {
  navigation: StackNavigationProp<{}>;
}

export default function Home({ navigation }: HomeProps) {
  return (
    <View>
      <Text>My Home Page</Text>
      <Button title="Click Me" onPress={() => navigation.navigate("MyNewPage" as never)} />
      <Button title='Log In' onPress={()=> navigation.navigate('Login' as never)} />
    </View>
  );
}