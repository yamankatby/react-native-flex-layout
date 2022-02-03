import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

export interface DividerProps {
  color?: string | undefined;

  inset?: number | undefined;

  leadingInset?: number | undefined;

  trailingInset?: number | undefined;

  style?: StyleProp<ViewStyle> | undefined;
}

const Divider: React.FC<DividerProps> = ({
  color,
  inset,
  leadingInset,
  trailingInset,
  style,
}) => {
  return (
    <View
      style={[
        {
          height: 1,
          backgroundColor: color || 'gray',
          marginStart: inset ?? leadingInset,
          marginEnd: inset ?? trailingInset,
        },
        style,
      ]}
    />
  );
};

export default Divider;
