---
sidebar_position: 1
---

# Get Started

A set of layout primitives that make it super easy to manage your app's layout.

## Installation

```bash npm2yarn
npm install react-native-flex-layout
```

## Import Components

```js
import { Box, Flex, Stack, Wrap, Selector } from 'react-native-flex-layout';
```

## Usage

### Box

The `Box` component serves as a wrapper component for most of the styling properties.

```jsx
<Box h={50} w={50} m={2}>
  <Text>Hello World</Text>
</Box>
```

### Flex

Flex is a container view extends React Native's flex-box properties and comes with helpful style shorthands.

```jsx
<Flex fill justify="center" items="center">
  <Box>Box 1</Box>
  <Box>Box 2</Box>
</Flex>
```

### Stack

Stack is a layout component that makes it easy to stack elements together and apply a space between them.

```jsx
<Stack spacing={2} divider>
  <Box>Box 1</Box>
  <Box>Box 2</Box>
</Stack>
```

### Wrap

Wrap is a layout component that adds a defined space between its children. It wraps its children automatically if there
isn't enough space to fit anymore in the same row.

```jsx
<Wrap spacing={2}>
  <Box>Box 1</Box>
  <Box>Box 2</Box>
</Wrap>
```

### Selector

A wrapper component that can be used to apply a style to a subset of its children.

```jsx
<Selector childrenStyle={{ marginBottom: 20 }}>
  <Box>Box 1</Box>
  <Box>Box 2</Box>
</Selector>
```
