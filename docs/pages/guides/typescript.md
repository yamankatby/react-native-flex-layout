# TypeScript

Add types to your components to support layout props.

`react-native-flex-layout` supports TypeScript and exports various interfaces and types for each component:

```ts
import {
  BoxProps,
  FlexProps,
  StackProps,
  //etc...
} from "react-native-flex-layout";
```

You can use these types with your own custom components. For example, if you want to support layout props in addition to
your own custom props:

```tsx
import { Stack, StackProps } from "react-native-flex-layout";

interface CardProps {
  myProp?: string;
}

const Card: React.FC<CardProps & StackProps> = function ({
  children,
  myProp,
  ...props
}) {
  return <Stack {...props}>{children}</Stack>;
};
```

Now when using this component, you can not only pass `myProp` but also any prop from Stack.
