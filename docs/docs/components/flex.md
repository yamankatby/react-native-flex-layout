---
sidebar_position: 2
---

# Flex

## Import

```js
import { Flex, Spacer } from 'react-native-flex-layout';
```

- **Flex:** A `Box` with shorthands for `flex` properties.
- **Spacer:** Creates an adjustable, empty space that can be used to tune the spacing between child elements
  within `Flex`.

## Props API

#### `fill`

Shorthand for the `flex` style property.

If `true` is passed, the `flex` style property will be set to `1`.

**Type:** `boolean` | `number`

---

#### `inline`

Shorthand for `{ flexDirection: "row" }`.

**Type:** `boolean`

---

#### `center`

Shorthand for `{ justifyContent: "center", alignItems: "center" }`.

**Type:** `boolean`

---

#### `direction`

Shorthand for the `flexDirection` style property.

**Type:** `row` | `column` | `row-reverse` | `column-reverse`

---

#### `justify`

Shorthand for the `justifyContent` style property.

If `center` prop is set to `true`, `justifyContent` will be forced to `center`.

**Type:** `start` | `end` | `center` | `between` | `around` | `evenly`

---

#### `items`

Shorthand for the `alignItems` style property.

If `center` prop is set to `true`, `alignItems` will be forced to `center`.

**Type:** `start` | `end` | `center` | `stretch` | `baseline`

---

#### `self`

Shorthand for the `alignSelf` style property.

**Type:** `auto` | `start` | `end` | `center` | `stretch` | `baseline`

---

#### `content`

Shorthand for the `alignContent` style property.

**Type:** `start` | `end` | `center` | `stretch` | `between` | `around`

---

#### `wrap`

Shorthand for the `flexWrap` style property.

If `true` is passed, the `flexWrap` style property will be set to `wrap`.

**Type:** `boolean` | `wrap` | `nowrap` | `wrap-reverse`

---

#### `basis`

Shorthand for the `flexBasis` style property.

**Type:** `auto` | `content` | `number`

---

#### `grow`

Shorthand for the `flexGrow` style property.

**Type:** `number`

---

#### `shrink`

Shorthand for the `flexShrink` style property.

**Type:** `number`

---

`...BoxProps`
