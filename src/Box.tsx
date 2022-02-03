import React, { useMemo } from 'react';
import { FlexStyle, View, ViewProps } from 'react-native';

export type Spacing = string | number;

export const useSpacing = (spacing?: number | string) =>
  useMemo(
    () => (typeof spacing === 'number' ? spacing * 4 : spacing),
    [spacing]
  );

export interface BoxProps extends ViewProps {
  /**
   * Shorthand for the `height` property.
   */
  h?: FlexStyle['height'];

  /**
   * Shorthand for the `minHeight` property.
   */
  minH?: FlexStyle['minHeight'];

  /**
   * Shorthand for the `maxHeight` property.
   */
  maxH?: FlexStyle['maxHeight'];

  /**
   * Shorthand for the `width` property.
   */
  w?: FlexStyle['width'];

  /**
   * Shorthand for the `minWidth` property.
   */
  minW?: FlexStyle['minWidth'];

  /**
   * Shorthand for the `maxWidth` property.
   */
  maxW?: FlexStyle['maxWidth'];

  /**
   * Shorthand for the `margin` property.
   */
  m?: FlexStyle['margin'];

  /**
   * Shorthand for the `marginTop` property.
   */
  mt?: FlexStyle['marginTop'];

  /**
   * Shorthand for the `marginRight` property.
   */
  mr?: FlexStyle['marginRight'];

  /**
   * Shorthand for the `marginBottom` property.
   */
  mb?: FlexStyle['marginBottom'];

  /**
   * Shorthand for the `marginLeft` property.
   */
  ml?: FlexStyle['marginLeft'];

  /**
   * Shorthand for the `marginStart` property.
   */
  ms?: FlexStyle['marginStart'];

  /**
   * Shorthand for the `marginEnd` property.
   */
  me?: FlexStyle['marginEnd'];

  /**
   * Shorthand for the `marginHorizontal` property.
   */
  mh?: FlexStyle['marginHorizontal'];

  /**
   * Shorthand for the `marginVertical` property.
   */
  mv?: FlexStyle['marginVertical'];

  /**
   * Shorthand for the `padding` property.
   */
  p?: FlexStyle['padding'];

  /**
   * Shorthand for the `paddingTop` property.
   */
  pt?: FlexStyle['paddingTop'];

  /**
   * Shorthand for the `paddingRight` property.
   */
  pr?: FlexStyle['paddingRight'];

  /**
   * Shorthand for the `paddingBottom` property.
   */
  pb?: FlexStyle['paddingBottom'];

  /**
   * Shorthand for the `paddingLeft` property.
   */
  pl?: FlexStyle['paddingLeft'];

  /**
   * Shorthand for the `paddingStart` property.
   */
  ps?: FlexStyle['paddingStart'];

  /**
   * Shorthand for the `paddingEnd` property.
   */
  pe?: FlexStyle['paddingEnd'];

  /**
   * Shorthand for the `paddingHorizontal` property.
   */
  ph?: FlexStyle['paddingHorizontal'];

  /**
   * Shorthand for the `paddingVertical` property.
   */
  pv?: FlexStyle['paddingVertical'];
}

const Box: React.FC<BoxProps> = ({
  h,
  minH,
  maxH,
  w,
  minW,
  maxW,
  m,
  mt,
  mr,
  mb,
  ml,
  ms,
  me,
  mh,
  mv,
  p,
  pt,
  pr,
  pb,
  pl,
  ps,
  pe,
  ph,
  pv,
  style,
  ...rest
}) => {
  const height = useSpacing(h);
  const minHeight = useSpacing(minH);
  const maxHeight = useSpacing(maxH);
  const width = useSpacing(w);
  const minWidth = useSpacing(minW);
  const maxWidth = useSpacing(maxW);
  const margin = useSpacing(m);
  const marginTop = useSpacing(mt);
  const marginRight = useSpacing(mr);
  const marginBottom = useSpacing(mb);
  const marginLeft = useSpacing(ml);
  const marginStart = useSpacing(ms);
  const marginEnd = useSpacing(me);
  const marginHorizontal = useSpacing(mh);
  const marginVertical = useSpacing(mv);
  const padding = useSpacing(p);
  const paddingTop = useSpacing(pt);
  const paddingRight = useSpacing(pr);
  const paddingBottom = useSpacing(pb);
  const paddingLeft = useSpacing(pl);
  const paddingStart = useSpacing(ps);
  const paddingEnd = useSpacing(pe);
  const paddingHorizontal = useSpacing(ph);
  const paddingVertical = useSpacing(pv);

  const boxStyle = useMemo(
    () => ({
      height,
      minHeight,
      maxHeight,
      width,
      minWidth,
      maxWidth,
      margin,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      marginStart,
      marginEnd,
      marginHorizontal,
      marginVertical,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingStart,
      paddingEnd,
      paddingHorizontal,
      paddingVertical,
    }),
    [
      height,
      minHeight,
      maxHeight,
      width,
      minWidth,
      maxWidth,
      margin,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      marginStart,
      marginEnd,
      marginHorizontal,
      marginVertical,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingStart,
      paddingEnd,
      paddingHorizontal,
      paddingVertical,
    ]
  );

  return <View style={[boxStyle, style]} {...rest} />;
};

export default Box;
