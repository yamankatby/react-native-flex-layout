import React from 'react';
import { Text } from 'react-native';
import { odd, Selector, even } from 'react-native-flex-layout';

export default function() {
  return (
    <Selector style={even({ backgroundColor: 'gray' })}>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </Selector>
  );
}
