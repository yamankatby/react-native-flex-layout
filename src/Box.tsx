import React, { useMemo } from 'react';
import { FlexStyle, View, ViewProps } from 'react-native';
import { useSpacing } from './SpacingFuncContext';

export interface BoxProps extends ViewProps {
  /**
   * Shorthand for the `height` style property.
   */
  h?: FlexStyle['height'];

  /**
   * Shorthand for the `minHeight` style property.
   */
  minH?: FlexStyle['minHeight'];

  /**
   * Shorthand for the `maxHeight` style property.
   */
  maxH?: FlexStyle['maxHeight'];

  /**
   * Shorthand for the `width` style property.
   */
  w?: FlexStyle['width'];

  /**
   * Shorthand for the `minWidth` style property.
   */
  minW?: FlexStyle['minWidth'];

  /**
   * Shorthand for the `maxWidth` style property.
   */
  maxW?: FlexStyle['maxWidth'];

  /**
   * Shorthand for the `margin` style property.
   */
  m?: FlexStyle['margin'];

  /**
   * Shorthand for the `marginTop` style property.
   */
  mt?: FlexStyle['marginTop'];

  /**
   * Shorthand for the `marginRight` style property.
   */
  mr?: FlexStyle['marginRight'];

  /**
   * Shorthand for the `marginBottom` style property.
   */
  mb?: FlexStyle['marginBottom'];

  /**
   * Shorthand for the `marginLeft` style property.
   */
  ml?: FlexStyle['marginLeft'];

  /**
   * Shorthand for the `marginStart` style property.
   */
  ms?: FlexStyle['marginStart'];

  /**
   * Shorthand for the `marginEnd` style property.
   */
  me?: FlexStyle['marginEnd'];

  /**
   * Shorthand for the `marginHorizontal` style property.
   */
  mh?: FlexStyle['marginHorizontal'];

  /**
   * Shorthand for the `marginVertical` style property.
   */
  mv?: FlexStyle['marginVertical'];

  /**
   * Shorthand for the `padding` style property.
   */
  p?: FlexStyle['padding'];

  /**
   * Shorthand for the `paddingTop` style property.
   */
  pt?: FlexStyle['paddingTop'];

  /**
   * Shorthand for the `paddingRight` style property.
   */
  pr?: FlexStyle['paddingRight'];

  /**
   * Shorthand for the `paddingBottom` style property.
   */
  pb?: FlexStyle['paddingBottom'];

  /**
   * Shorthand for the `paddingLeft` style property.
   */
  pl?: FlexStyle['paddingLeft'];

  /**
   * Shorthand for the `paddingStart` style property.
   */
  ps?: FlexStyle['paddingStart'];

  /**
   * Shorthand for the `paddingEnd` style property.
   */
  pe?: FlexStyle['paddingEnd'];

  /**
   * Shorthand for the `paddingHorizontal` style property.
   */
  ph?: FlexStyle['paddingHorizontal'];

  /**
   * Shorthand for the `paddingVertical` style property.
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
