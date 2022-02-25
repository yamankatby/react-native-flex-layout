import React, { useMemo } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { useSpacing } from './SpacingFuncContext';

export interface BoxProps extends ViewProps {
  /**
   * Shorthand for the `height` style property.
   */
  h?: ViewStyle['height'];

  /**
   * Shorthand for the `minHeight` style property.
   */
  minH?: ViewStyle['minHeight'];

  /**
   * Shorthand for the `maxHeight` style property.
   */
  maxH?: ViewStyle['maxHeight'];

  /**
   * Shorthand for the `width` style property.
   */
  w?: ViewStyle['width'];

  /**
   * Shorthand for the `minWidth` style property.
   */
  minW?: ViewStyle['minWidth'];

  /**
   * Shorthand for the `maxWidth` style property.
   */
  maxW?: ViewStyle['maxWidth'];

  /**
   * Shorthand for the `margin` style property.
   */
  m?: ViewStyle['margin'];

  /**
   * Shorthand for the `marginTop` style property.
   */
  mt?: ViewStyle['marginTop'];

  /**
   * Shorthand for the `marginRight` style property.
   */
  mr?: ViewStyle['marginRight'];

  /**
   * Shorthand for the `marginBottom` style property.
   */
  mb?: ViewStyle['marginBottom'];

  /**
   * Shorthand for the `marginLeft` style property.
   */
  ml?: ViewStyle['marginLeft'];

  /**
   * Shorthand for the `marginStart` style property.
   */
  ms?: ViewStyle['marginStart'];

  /**
   * Shorthand for the `marginEnd` style property.
   */
  me?: ViewStyle['marginEnd'];

  /**
   * Shorthand for the `marginHorizontal` style property.
   */
  mh?: ViewStyle['marginHorizontal'];

  /**
   * Shorthand for the `marginVertical` style property.
   */
  mv?: ViewStyle['marginVertical'];

  /**
   * Shorthand for the `padding` style property.
   */
  p?: ViewStyle['padding'];

  /**
   * Shorthand for the `paddingTop` style property.
   */
  pt?: ViewStyle['paddingTop'];

  /**
   * Shorthand for the `paddingRight` style property.
   */
  pr?: ViewStyle['paddingRight'];

  /**
   * Shorthand for the `paddingBottom` style property.
   */
  pb?: ViewStyle['paddingBottom'];

  /**
   * Shorthand for the `paddingLeft` style property.
   */
  pl?: ViewStyle['paddingLeft'];

  /**
   * Shorthand for the `paddingStart` style property.
   */
  ps?: ViewStyle['paddingStart'];

  /**
   * Shorthand for the `paddingEnd` style property.
   */
  pe?: ViewStyle['paddingEnd'];

  /**
   * Shorthand for the `paddingHorizontal` style property.
   */
  ph?: ViewStyle['paddingHorizontal'];

  /**
   * Shorthand for the `paddingVertical` style property.
   */
  pv?: ViewStyle['paddingVertical'];

  /**
   * Shorthand for the `borderStyle` style property.
   */
  borderStyle?: ViewStyle['borderStyle'];

  /**
   * Shorthand for the `borderWidth` style property.
   */
  border?: ViewStyle['borderWidth'];

  /**
   * Shorthand for the `borderTopWidth` style property.
   */
  borderTop?: ViewStyle['borderTopWidth'];

  /**
   * Shorthand for the `borderRightWidth` style property.
   */
  borderRight?: ViewStyle['borderRightWidth'];

  /**
   * Shorthand for the `borderBottomWidth` style property.
   */
  borderBottom?: ViewStyle['borderBottomWidth'];

  /**
   * Shorthand for the `borderLeftWidth` style property.
   */
  borderLeft?: ViewStyle['borderLeftWidth'];

  /**
   * Shorthand for the `borderStartWidth` style property.
   */
  borderStart?: ViewStyle['borderStartWidth'];

  /**
   * Shorthand for the `borderEndWidth` style property.
   */
  borderEnd?: ViewStyle['borderEndWidth'];

  /**
   * Shorthand for the `borderColor` style property.
   */
  borderColor?: ViewStyle['borderColor'];

  /**
   * Shorthand for the `borderTopColor` style property.
   */
  borderTopColor?: ViewStyle['borderTopColor'];

  /**
   * Shorthand for the `borderRightColor` style property.
   */
  borderRightColor?: ViewStyle['borderRightColor'];

  /**
   * Shorthand for the `borderBottomColor` style property.
   */
  borderBottomColor?: ViewStyle['borderBottomColor'];

  /**
   * Shorthand for the `borderLeftColor` style property.
   */
  borderLeftColor?: ViewStyle['borderLeftColor'];

  /**
   * Shorthand for the `borderStartColor` style property.
   */
  borderStartColor?: ViewStyle['borderStartColor'];

  /**
   * Shorthand for the `borderEndColor` style property.
   */
  borderEndColor?: ViewStyle['borderEndColor'];

  /**
   * Shorthand for the `borderRadius` style property.
   */
  radius?: ViewStyle['borderRadius'];

  /**
   * Shorthand for the `borderTopLeftRadius` style property.
   */
  topLeftRadius?: ViewStyle['borderTopLeftRadius'];

  /**
   * Shorthand for the `borderTopRightRadius` style property.
   */
  topRightRadius?: ViewStyle['borderTopRightRadius'];

  /**
   * Shorthand for the `borderBottomLeftRadius` style property.
   */
  bottomLeftRadius?: ViewStyle['borderTopLeftRadius'];

  /**
   * Shorthand for the `borderBottomRightRadius` style property.
   */
  bottomRightRadius?: ViewStyle['borderBottomRightRadius'];

  /**
   * Shorthand for the `borderTopStartRadius` style property.
   */
  topStartRadius?: ViewStyle['borderTopStartRadius'];

  /**
   * Shorthand for the `borderTopEndRadius` style property.
   */
  topEndRadius?: ViewStyle['borderTopEndRadius'];

  /**
   * Shorthand for the `borderBottomStartRadius` style property.
   */
  bottomStartRadius?: ViewStyle['borderBottomStartRadius'];

  /**
   * Shorthand for the `borderBottomEndRadius` style property.
   */
  bottomEndRadius?: ViewStyle['borderBottomEndRadius'];

  /**
   * Shorthand for the `position` style property.
   */
  position?: ViewStyle['position'];

  /**
   * Shorthand for the `top` style property.
   */
  top?: ViewStyle['top'];

  /**
   * Shorthand for the `right` style property.
   */
  right?: ViewStyle['right'];

  /**
   * Shorthand for the `bottom` style property.
   */
  bottom?: ViewStyle['bottom'];

  /**
   * Shorthand for the `left` style property.
   */
  left?: ViewStyle['left'];

  /**
   * Shorthand for the `start` style property.
   */
  start?: ViewStyle['start'];

  /**
   * Shorthand for the `end` style property.
   */
  end?: ViewStyle['end'];

  /**
   * Shorthand for the `flex` style property.
   * If `true` is passed, the `flex` style property will be set to `1`.
   */
  fill?: boolean | number;

  /**
   * Shorthand for `{ flexDirection: "row" }`.
   */
  inline?: boolean;

  /**
   * Shorthand for `{ justifyContent: "center", alignItems: "center" }`.
   */
  center?: boolean;

  /**
   * Shorthand for the `flexDirection` style property.
   */
  direction?: ViewStyle['flexDirection'];

  /**
   * Shorthand for the `justifyContent` style property.
   * If `center` prop is set to `true`, `justifyContent` will be forced to `center`.
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

  /**
   * Shorthand for the `alignItems` style property.
   * If `center` prop is set to `true`, `alignItems` will be forced to `center`.
   */
  items?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';

  /**
   * Shorthand for the `alignSelf` style property.
   */
  self?: 'auto' | 'start' | 'end' | 'center' | 'stretch' | 'baseline';

  /**
   * Shorthand for the `alignContent` style property.
   */
  content?: 'start' | 'end' | 'center' | 'stretch' | 'between' | 'around';

  /**
   * Shorthand for the `flexWrap` style property.
   * If `true` is passed, the `flexWrap` style property will be set to `wrap`.
   */
  wrap?: boolean | ViewStyle['flexWrap'];

  /**
   * Shorthand for the `flexBasis` style property.
   */
  basis?: ViewStyle['flexBasis'];

  /**
   * Shorthand for the `flexGrow` style property.
   */
  grow?: ViewStyle['flexGrow'];

  /**
   * Shorthand for the `flexShrink` style property.
   */
  shrink?: ViewStyle['flexShrink'];
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
  borderStyle,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderStart,
  borderEnd,
  borderColor,
  borderTopColor,
  borderRightColor,
  borderBottomColor,
  borderLeftColor,
  borderStartColor,
  borderEndColor,
  radius,
  topLeftRadius,
  topRightRadius,
  bottomLeftRadius,
  bottomRightRadius,
  topStartRadius,
  topEndRadius,
  bottomStartRadius,
  bottomEndRadius,
  position,
  top,
  right,
  bottom,
  left,
  start,
  end,
  fill,
  inline,
  center,
  justify,
  items,
  self,
  content,
  wrap,
  basis,
  grow,
  shrink,
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

// export interface FlexStyle {
//   backgroundColor?: string;
//   opacity?: number;
//   testID?: string;
//   backfaceVisibility?: "visible" | "hidden";
//   aspectRatio?: number;
//   display?: "none" | "flex";
//   overflow?: "visible" | "hidden" | "scroll";
//   zIndex?: number;
//   elevation?: number;
//   direction?: "inherit" | "ltr" | "rtl";
// }
