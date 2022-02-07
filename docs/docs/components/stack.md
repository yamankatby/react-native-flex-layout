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

## Usage

To stack elements in horizontal or vertical direction only, use the `HStack` or `VStack` components. You can also use
the `Stack` component as well and pass the `direction` prop.

### Adding dividers

In some scenarios, you may want to add dividers between stacked elements. Pass the divider prop and set its value
to `true` or any custom React element.

### Stack items horizontally

Pass the `direction` and set it to `row`. Optionally, you can use `align` and `justify` to adjust the alignment and
distribution of the items.

### Notes on Stack vs Flex

Stack's primary use case is to lay items out and control the spacing between each item. If you have a more complicated
use case, such as changing the margin on the last child, you can combine `Stack` and `Flex` and
use `justify-content: space-between` for more control of the layout.

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
