import React from 'react';
import {
  Text, TouchableOpacity
} from 'react-native';

const Button = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Text>Click me!!!</Text>
    </TouchableOpacity>
  );

export default Button;
