# useMemo Hooks

The useMemo hook in React is used to optimize performance by memoizing the result of a computation so that it is recalculated only when its dependencies change. This helps avoid unnecessary calculations during re-renders.

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

computeExpensiveValue: The function containing the computation.
[a, b]: Dependency array; the memoized value updates only when a or b changes.

Caching the previous result