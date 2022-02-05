import React, { useMemo } from 'react';
import {
  ImageStyle,
  StyleProp,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

type Style = StyleProp<ViewStyle | TextStyle | ImageStyle>;

type ChildrenStyle = Style | ((index: number, length: number) => Style);

type ChildrenStyleProp = ChildrenStyle | Array<ChildrenStyleProp>;

export interface SelectProps extends ViewProps {
  childrenStyle?: ChildrenStyleProp;
}

const Select: React.FC<SelectProps> = ({
  childrenStyle,
  children,
  ...rest
}) => {
  const flattenedChildrenStyle = useMemo(
    () =>
      Array.isArray(childrenStyle) ? childrenStyle.flat() : [childrenStyle],
    [childrenStyle]
  );

  if (!childrenStyle) return <View {...rest}>{children}</View>;

  const validChildren = getValidChildren(children);

  const clones = validChildren.map((child, index) =>
    React.cloneElement(child, {
      style: [
        child.props.style,
        flattenedChildrenStyle.map((style) =>
          typeof style === 'function'
            ? style(index, validChildren.length)
            : style
        ),
      ],
    })
  );

  return <View {...rest} children={clones} />;
};

export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as React.ReactElement[];
}

export const firstChild = (style: Style) => (index: number) =>
  index === 0 ? style : null;

export const notFirstChild = (style: Style) => (index: number) =>
  index !== 0 ? style : null;

export const lastChild = (style: Style) => (index: number, length: number) =>
  index === length - 1 ? style : null;

export const notLastChild = (style: Style) => (index: number, length: number) =>
  index !== length - 1 ? style : null;

export default Select;
