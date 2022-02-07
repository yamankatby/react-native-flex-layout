import React, { useMemo } from 'react';
import type { BoxProps } from './Box';
import Box from './Box';

export interface DividerProps extends BoxProps {
  /**
   * The orientation of the divider.
   *
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The thickness of the divider.
   *
   * @default 1
   */
  thickness?: number;

  /**
   * The color of the divider.
   *
   * @default '#E0E0E0'
   */
  color?: string;
}

const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  thickness = 1,
  color = '#E0E0E0',
  style,
  ...rest
}) => {
  const dividerStyle = useMemo(() => {
    if (orientation === 'horizontal')
      return { height: thickness, backgroundColor: color };
    else return { width: thickness, backgroundColor: color };
  }, [orientation, thickness, color]);

  return <Box style={[dividerStyle, style]} {...rest} />;
};

export default Divider;
