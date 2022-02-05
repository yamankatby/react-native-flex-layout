import React, { useMemo } from 'react';
import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { getValidChildren } from './getValidChildren';

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

export const firstChild = (style: AnyStyle) => (index: number) =>
  index === 0 ? style : null;

export const notFirstChild = (style: AnyStyle) => (index: number) =>
  index !== 0 ? style : null;

export const lastChild = (style: AnyStyle) => (index: number, length: number) =>
  index === length - 1 ? style : null;

export const notLastChild =
  (style: AnyStyle) => (index: number, length: number) =>
    index !== length - 1 ? style : null;
