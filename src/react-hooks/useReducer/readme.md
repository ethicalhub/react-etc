# useReducer Hook

useReducer is a React hook used for managing state in more complex situations, where state transitions depend on previous state values or involve more complex logic. It is an alternative to useState and is especially useful when state logic becomes intricate or involves multiple sub-values.

When to use useReducer
- When state updates depend on previous state values.
- For complex state logic (e.g., multiple actions, conditions).
- When managing state across multiple components or actions.
- In cases where state updates are more predictable or require actions with specific effects.

How useReducer works:

- The initialState is set when the component is rendered.
- When an action is dispatched using dispatch, the reducer function is called with the current state and the action.
- The reducer returns the new state based on the action's type.
- The component re-renders with the updated state.

the code attached is just the basic implementation, which I might/might not update later with more complex logic