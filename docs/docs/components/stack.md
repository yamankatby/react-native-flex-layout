---
sidebar_position: 3
---

# Stack

## Import

```js
import { Stack, HStack, VStack } from 'react-native-flex-layout';
```

- **Stack:** Used to add spacing and/or dividers between items in the horizontal or vertical direction.
- **HStack:** Shorthand for `<Stack direction="row" />`.
- **VStack:** Shorthand for `<Stack direction="column" />`.

## Props API

### Stack Props

#### `spacing`

The spacing between items in the stack.

**Type:** `Spacing`

**Default:** `0`

---

#### `divider`

If `true`, each stack item will show a divider.

**Type:** `React.ReactElement`

**Default:** `false`

---

#### `dividerStyle`

A style object to apply to each divider.

**Type:** `StyleProp<ViewStyle>`

---

#### `shouldWrapChildren`

If `true`, the children will be wrapped in a `Box` and the `Box` will take the spacing properties.

**Type:** `boolean`

**Default:** `false`

---

`...FlexProps` `...SelectorProps`

### HStack Props

#### `reverse`

Shorthand for `{ flexDirection: 'row-reverse' }`.

**Type:** `boolean`

**Default:** `false`

`...StackProps`

### VStack Props

#### `reverse`

Shorthand for `{ flexDirection: 'column-reverse' }`.

**Type:** `boolean`

**Default:** `false`

`...StackProps`
