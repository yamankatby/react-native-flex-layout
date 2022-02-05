import React from 'react';
import { View } from 'react-native';
import type { FlexProps } from './Flex';
import Flex from './Flex';

export interface StackProps extends FlexProps {
  /**
   * The spacing between items in the stack.
   *
   * @default 0
   */
  spacing?: number;

  /**
   * If `true`, each stack item will show a divider.
   *
   * @default false
   */
  divider?: boolean | React.ReactElement;

  /**
   * If `true`, the children will be wrapped in a `Box` and the `Box` will take the spacing properties.
   *
   * @default false
   */
  shouldWrapChildren?: boolean;
}

const Stack: React.FC<StackProps> = ({
  spacing = 0,
  divider = false,
  shouldWrapChildren = false,
  children,
  ...rest
}) => {
  return <Flex {...rest}>{children}</Flex>;
};

export default Stack;

const StackItem: React.FC = ({ children }) => {
  return <View>{children}</View>;
};

export interface HStackProps extends Omit<StackProps, 'inline' | 'direction'> {
  reverse?: boolean;
}

export const HStack: React.FC<HStackProps> = ({ reverse, ...rest }) => {
  return <Stack {...rest} direction={reverse ? 'row-reverse' : 'row'} />;
};

export interface VStackProps extends Omit<StackProps, 'inline' | 'direction'> {
  reverse?: boolean;
}

export const VStack: React.FC<VStackProps> = ({ reverse, ...rest }) => {
  return <Stack {...rest} direction={reverse ? 'column-reverse' : 'column'} />;
};
