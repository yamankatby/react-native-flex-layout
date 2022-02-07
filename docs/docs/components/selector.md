---
sidebar_position: 5
---

# Selector

## Import

```js
import {
  Selector,
  firstChild,
  notFirstChild,
  lastChild,
  notLastChild,
  even,
  odd,
  select
} from 'react-native-flex-layout';
```

- **Selector:** A wrapper component that can be used to apply a style to a subset of the children.
- **firstChild:** Selects the first child.
- **notFirstChild:** Selects all children except the first child.
- **lastChild:** Selects the last child.
- **notLastChild:** Selects all children except the last child.
- **even:** Selects all children that are even.
- **odd:** Selects all children that are odd.
- **select:** Selects all children that match the given selector.

## Props API

`childrenStyle`

A style object to apply to each child.

**Type:** `StyleProp<ViewStyle | TextStyle | ImageStyle`
