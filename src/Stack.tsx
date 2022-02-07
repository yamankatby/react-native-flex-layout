import React, { useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import type { FlexProps } from './Flex';
import Flex from './Flex';
import type { SelectorProps } from './Selector';
import Selector, { notLastChild } from './Selector';
import Divider from './Divider';
import { useSpacing } from './SpacingFuncContext';
import { getValidChildren } from './utilities';

export interface StackProps extends FlexProps, SelectorProps {
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
  divider?: React.ReactElement;

  /**
   * A style object to apply to each divider.
   */
  dividerStyle?: StyleProp<ViewStyle>;

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
  dividerStyle,
  shouldWrapChildren = false,
  childrenStyle,
  children,
  ...rest
}) => {
  const spacingValue = useSpacing(spacing);

  const direction = useMemo(() => {
    return rest.inline ? 'row' : rest.direction || 'column';
  }, [rest.inline, rest.direction]);

  const spacingStyle = useMemo(() => {
    switch (direction) {
      case 'column':
        return { marginBottom: spacingValue };
      case 'row':
        return { marginEnd: spacingValue };
      case 'column-reverse':
        return { marginTop: spacingValue };
      case 'row-reverse':
        return { marginStart: spacingValue };
    }
  }, [spacingValue, direction]);

  const shouldUseChildren = !shouldWrapChildren && !divider;

  const validChildren = getValidChildren(children);

  const clones = shouldUseChildren
    ? validChildren
    : validChildren.map((child, index) => {
        const key = typeof child.key !== 'undefined' ? child.key : index;
        const isLast = index + 1 === validChildren.length;
        const wrappedChild = <StackItem key={key}>{child}</StackItem>;
        const _child = shouldWrapChildren ? wrappedChild : child;

        if (!divider) return _child;

        const dividerElement = React.isValidElement(divider) ? (
          divider
        ) : (
          <Divider
            orientation={
              direction === 'row' || direction === 'row-reverse'
                ? 'vertical'
                : 'horizontal'
            }
          />
        );

        const clonedDivider = React.cloneElement(dividerElement, {
          key: `${key}-divider`,
          style: [dividerElement.props.style, dividerStyle],
        });

        const _divider = isLast ? null : clonedDivider;

        return [_child, _divider];
      });

  return (
    <Flex {...rest}>
      <Selector childrenStyle={[notLastChild(spacingStyle), childrenStyle]}>
        {clones}
      </Selector>
    </Flex>
  );
};

export default Stack;

const StackItem: React.FC = (props) => <View {...props} />;

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
