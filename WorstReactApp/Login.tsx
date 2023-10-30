import React from "react";
import { View, Text, TextInput } from "react-native";

export default function Login() {
  const [text, onChangeText] = React.useState('');
  const [passwordtext, onChangePassword] = React.useState('');

  return (
    <View>
      <TextInput         
          style={{
          height: 40,
          borderColor: 'red',
          borderWidth: 1,
        }}
        onChangeText={onChangeText}
        value={text}
        placeholder="Username"></TextInput>
      <TextInput
          style={{
            height: 40,
            borderColor: 'blue',
            borderWidth: 1,
          }}
          onChangeText={onChangePassword}
          value={passwordtext}
          placeholder="password"
          secureTextEntry={true}></TextInput>
    
    </View>
  );
};

