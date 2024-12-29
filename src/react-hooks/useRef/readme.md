# useRef Hooks

useRef is a React hook that returns a mutable object which persists across component re-renders. It can be used to store a value or reference that does not trigger re-renders when changed.

- Accessing DOM elements directly.
- Storing mutable values that do not require re-rendering.

const myRef = useRef(initialValue)
- myRef:
The object returned by useRef. 
It has a .current property that can hold any value (e.g., DOM reference or mutable value)

It does not trigger a re-render when the value stored in .current changes (setState always rerenders the component
Ideal for managing values like timers, DOM references, or tracking mutable values (such as previous state) without affecting the component's rendering behavior.