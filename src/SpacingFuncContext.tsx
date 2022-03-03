import React, { createContext, useContext, useMemo } from 'react';

export type Spacing = number | string | undefined;

export type SpacingFunc = (size?: number | string) => Spacing;

export const defaultSpacingFunc: SpacingFunc = (space) => space;

export const SpacingFuncContext = createContext(defaultSpacingFunc);

export const useSpacingFunc = () => useContext(SpacingFuncContext);

export const useSpacing = (size?: number | string) => {
  const spacingFunc = useSpacingFunc();
  return useMemo(() => spacingFunc(size), [spacingFunc, size]);
};

export interface SpacingFuncProviderProps {
  spacingFunc?: SpacingFunc;
}

export const SpacingFuncProvider: React.FC<SpacingFuncProviderProps> = ({
  children,
  spacingFunc = defaultSpacingFunc,
}) => (
  <SpacingFuncContext.Provider value={spacingFunc}>
    {children}
  </SpacingFuncContext.Provider>
);
