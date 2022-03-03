import React, { useMemo } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { useSpacingFunc } from './SpacingFuncContext';

export interface BoxProps extends ViewProps {
  /**
   * Child to render
   */
  as?: React.ReactElement;

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
   * Shorthand for the `backgroundColor` style property.
   */
  bg?: ViewStyle['backgroundColor'];

  /**
   * Shorthand for the `opacity` style property.
   */
  opacity?: ViewStyle['opacity'];

  /**
   * Shorthand for the `zIndex` style property.
   */
  zIndex?: ViewStyle['zIndex'];

  /**
   * Shorthand for the `overflow` style property.
   */
  overflow?: ViewStyle['overflow'];
}

const Box: React.FC<BoxProps> = ({
  as,
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
  bg,
  opacity,
  zIndex,
  overflow,
  style,
  ...rest
}) => {
  const spacingFunc = useSpacingFunc();

  const boxStyle = useMemo(() => {
    const styleObj: ViewStyle = {};

    styleObj.height = spacingFunc(h);
    styleObj.minHeight = spacingFunc(minH);
    styleObj.maxHeight = spacingFunc(maxH);
    styleObj.width = spacingFunc(w);
    styleObj.minWidth = spacingFunc(minW);
    styleObj.maxWidth = spacingFunc(maxW);
    styleObj.margin = spacingFunc(m);
    styleObj.marginTop = spacingFunc(mt);
    styleObj.marginRight = spacingFunc(mr);
    styleObj.marginBottom = spacingFunc(mb);
    styleObj.marginLeft = spacingFunc(ml);
    styleObj.marginStart = spacingFunc(ms);
    styleObj.marginEnd = spacingFunc(me);
    styleObj.marginHorizontal = spacingFunc(mh);
    styleObj.marginVertical = spacingFunc(mv);
    styleObj.padding = spacingFunc(p);
    styleObj.paddingTop = spacingFunc(pt);
    styleObj.paddingRight = spacingFunc(pr);
    styleObj.paddingBottom = spacingFunc(pb);
    styleObj.paddingLeft = spacingFunc(pl);
    styleObj.paddingStart = spacingFunc(ps);
    styleObj.paddingEnd = spacingFunc(pe);
    styleObj.paddingHorizontal = spacingFunc(ph);
    styleObj.paddingVertical = spacingFunc(pv);

    styleObj.borderStyle = borderStyle;
    styleObj.borderWidth = border;
    styleObj.borderTopWidth = borderTop;
    styleObj.borderRightWidth = borderRight;
    styleObj.borderBottomWidth = borderBottom;
    styleObj.borderLeftWidth = borderLeft;
    styleObj.borderStartWidth = borderStart;
    styleObj.borderEndWidth = borderEnd;
    styleObj.borderColor = borderColor;
    styleObj.borderTopColor = borderTopColor;
    styleObj.borderRightColor = borderRightColor;
    styleObj.borderBottomColor = borderBottomColor;
    styleObj.borderLeftColor = borderLeftColor;
    styleObj.borderStartColor = borderStartColor;
    styleObj.borderEndColor = borderEndColor;
    styleObj.borderRadius = radius;
    styleObj.borderTopLeftRadius = topLeftRadius;
    styleObj.borderTopRightRadius = topRightRadius;
    styleObj.borderBottomLeftRadius = bottomLeftRadius;
    styleObj.borderBottomRightRadius = bottomRightRadius;
    styleObj.borderTopStartRadius = topStartRadius;
    styleObj.borderTopEndRadius = topEndRadius;
    styleObj.borderBottomStartRadius = bottomStartRadius;
    styleObj.borderBottomEndRadius = bottomEndRadius;
    styleObj.position = position;
    styleObj.top = top;
    styleObj.right = right;
    styleObj.bottom = bottom;
    styleObj.left = left;
    styleObj.start = start;
    styleObj.end = end;
    styleObj.backgroundColor = bg;
    styleObj.opacity = opacity;
    styleObj.zIndex = zIndex;
    styleObj.overflow = overflow;

    return styleObj;
  }, [
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
    bg,
    opacity,
    zIndex,
    overflow,
    spacingFunc,
  ]);

  if (as) {
    return React.cloneElement(as, {
      style: [boxStyle, style, as.props.style],
      ...rest,
    });
  }

  return <View style={[boxStyle, style]} {...rest} />;
};

export default Box;

// export interface FlexStyle {
//   backfaceVisibility?: "visible" | "hidden";
//   aspectRatio?: number;
//   display?: "none" | "flex";
//   elevation?: number;
//   direction?: "inherit" | "ltr" | "rtl";
// }

// color, space, size, borderWidth, borderRadius
