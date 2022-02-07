import React, { useMemo } from 'react';
import type { FlexStyle, ViewStyle } from 'react-native';
import type { BoxProps } from './Box';
import Box from './Box';

export interface FlexProps extends BoxProps {
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
  direction?: FlexStyle['flexDirection'];

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
  wrap?: boolean | FlexStyle['flexWrap'];

  /**
   * Shorthand for the `flexBasis` style property.
   */
  basis?: FlexStyle['flexBasis'];

  /**
   * Shorthand for the `flexGrow` style property.
   */
  grow?: FlexStyle['flexGrow'];

  /**
   * Shorthand for the `flexShrink` style property.
   */
  shrink?: FlexStyle['flexShrink'];
}

const Flex: React.FC<FlexProps> = ({
  fill,
  inline,
  center,
  direction,
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
  const flex = useMemo(
    () => (typeof fill === 'boolean' ? (fill ? 1 : undefined) : fill),
    [fill]
  );

  const flexDirection = useMemo(
    () => (inline ? 'row' : direction),
    [inline, direction]
  );

  const justifyContent = useMemo(() => {
    if (center) return 'center';
    switch (justify) {
      case 'start':
        return 'flex-start';
      case 'end':
        return 'flex-end';
      case 'between':
        return 'space-between';
      case 'around':
        return 'space-around';
      case 'evenly':
        return 'space-evenly';
      default:
        return justify;
    }
  }, [center, justify]);

  const alignItems = useMemo(() => {
    if (center) return 'center';
    switch (items) {
      case 'start':
        return 'flex-start';
      case 'end':
        return 'flex-end';
      default:
        return items;
    }
  }, [center, items]);

  const alignSelf = useMemo(() => {
    switch (self) {
      case 'start':
        return 'flex-start';
      case 'end':
        return 'flex-end';
      default:
        return self;
    }
  }, [self]);

  const alignContent = useMemo(() => {
    switch (content) {
      case 'start':
        return 'flex-start';
      case 'end':
        return 'flex-end';
      case 'between':
        return 'space-between';
      case 'around':
        return 'space-around';
      default:
        return content;
    }
  }, [content]);

  const flexWrap = useMemo(
    () => (typeof wrap === 'boolean' ? (wrap ? 'wrap' : undefined) : wrap),
    [wrap]
  );

  const flexStyle = useMemo(
    (): ViewStyle => ({
      flex,
      flexDirection,
      justifyContent,
      alignItems,
      alignSelf,
      alignContent,
      flexWrap,
      flexBasis: basis,
      flexGrow: grow,
      flexShrink: shrink,
    }),
    [
      flex,
      flexDirection,
      justifyContent,
      alignItems,
      alignSelf,
      alignContent,
      flexWrap,
      basis,
      grow,
      shrink,
    ]
  );

  return <Box style={[flexStyle, style]} {...rest} />;
};

export default Flex;

export const Spacer: React.FC<FlexProps> = (props) => {
  return <Flex fill self="stretch" {...props} />;
};
