import React from 'react';
import { View } from 'react-native';
import type { FlexProps } from './Flex';
import Flex from './Flex';
import type { SelectorProps } from './Selector';
import Selector from './Selector';
import { useSpacing } from './SpacingFuncContext';
import { getValidChildren } from './utilities';

export interface WrapProps extends FlexProps, SelectorProps {
  /**
   * The space between each child (even if it wraps).
   *
   * @default 0
   */
  spacing?: number;

  /**
   * If `true`, the children will be wrapped in a `Box` and the `Box` will take the spacing properties.
   *
   * @default false
   */
  shouldWrapChildren?: boolean;
}

const Wrap: React.FC<WrapProps> = ({
  spacing = 0,
  shouldWrapChildren = false,
  childrenStyle,
  children,
  ...rest
}) => {
  const spacingValue = useSpacing(spacing);

  const validChildren = getValidChildren(children);

  const clones = !shouldWrapChildren
    ? validChildren
    : validChildren.map((child, index) => {
        const key = typeof child.key !== 'undefined' ? child.key : index;
        return <WrapItem key={key}>{child}</WrapItem>;
      });

  return (
    <Flex mt={-spacing} ms={-spacing} inline wrap {...rest}>
      <Selector
        childrenStyle={[
          { marginTop: spacingValue, marginStart: spacingValue },
          childrenStyle,
        ]}
      >
        {clones}
      </Selector>
    </Flex>
  );
};

export default Wrap;

const WrapItem: React.FC = (props) => <View {...props} />;
