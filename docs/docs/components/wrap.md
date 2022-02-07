---
sidebar_position: 4
---

# Wrap

Wrap is a layout component that adds a defined space between its children. It wraps its children automatically if there
isn't enough space to fit anymore in the same row.

Think of it as a smarter `flex-wrap` with `spacing` support. It works really well with things like dialog buttons, tags,
and chips.

## Import

```js
import { Wrap } from 'react-native-flex-layout';
```

## Usage

In the example below, you see that the last `Box` wrapped to the next line.

### Change the spacing

Pass the `spacing` prop to apply consistent spacing between each child, even if it wraps.

### Change the alignment

Pass the `align` prop to change the alignment of the child along the cross axis.

Pass the `justify` prop to change the alignment of the child along the main axis.

## Props API

#### `spacing`

The space between each child (even if it wraps).

**Type:** `Spacing`

**Default:** `0`

---

#### `shouldWrapChildren`

If `true`, the children will be wrapped in a `Box` and the `Box` will take the spacing properties.

**Type:** `boolean`

**Default:** `false`

---

`...FlexProps` `...SelectorProps`
