import React, { useMemo } from 'react';
import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { getValidChildren } from './utilities';

type Style = StyleProp<ViewStyle | TextStyle | ImageStyle>;

type ChildrenStyle = Style | ((index: number, length: number) => Style);

type ChildrenStyleProp = ChildrenStyle | Array<ChildrenStyleProp>;

export interface SelectorProps {
  /**
   * A style object to apply to each child.
   */
  childrenStyle?: ChildrenStyleProp;
}

const Selector: React.FC<SelectorProps> = ({ childrenStyle, children }) => {
  const styles = useMemo(
    () =>
      Array.isArray(childrenStyle)
        ? childrenStyle.flat(Infinity)
        : [childrenStyle],
    [childrenStyle]
  );

  const validChildren = getValidChildren(children);

  return (
    <>
      {validChildren.map((child, index) =>
        React.cloneElement(child, {
          style: [
            child.props.style,
            styles.map((style) =>
              typeof style === 'function'
                ? style(index, validChildren.length)
                : style
            ),
          ],
        })
      )}
    </>
  );
};

export default Selector;

export const select =
  (selector: (index: number, length: number) => boolean) =>
  (style: Style) =>
  (index: number, length: number) =>
    selector(index, length) ? style : null;

export const firstChild = select((index) => index === 0);

export const notFirstChild = select((index) => index !== 0);

export const lastChild = select((index, length) => index === length - 1);

export const notLastChild = select((index, length) => index !== length - 1);

export const even = select((index) => index % 2 === 0);

export const odd = select((index) => index % 2 !== 0);
