import React, { useMemo } from 'react';
import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { getValidChildren } from './utilities';

type AnyStyle = StyleProp<ViewStyle | TextStyle | ImageStyle>;

type ChildStyle = AnyStyle | ((index: number, length: number) => AnyStyle);

type ChildStyleProp = ChildStyle | Array<ChildStyle>;

export interface SelectorProps {
  style?: ChildStyleProp;
}

const Selector: React.FC<SelectorProps> = ({ style, children }) => {
  const styles = useMemo(
    () => (Array.isArray(style) ? style.flat(Infinity) : [style]),
    [style]
  );

  const validChildren = getValidChildren(children);

  return (
    <>
      {validChildren.map((child, index) =>
        React.cloneElement(child, {
          style: [
            child.props.style,
            styles.map((s) =>
              typeof s === 'function' ? s(index, validChildren.length) : s
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
  (style: AnyStyle) =>
  (index: number, length: number) =>
    selector(index, length) ? style : null;

export const firstChild = select((index) => index === 0);

export const notFirstChild = select((index) => index !== 0);

export const lastChild = select((index, length) => index === length - 1);

export const notLastChild = select((index, length) => index !== length - 1);

export const even = select((index) => index % 2 === 0);

export const odd = select((index) => index % 2 !== 0);
