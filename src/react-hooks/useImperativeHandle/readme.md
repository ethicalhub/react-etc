# useImperativeHandle hook
This one is quite new for me,
It is a hook in React that allows us to customize the value that is exposed to parent components when using ref in a functional component.

By default when we pass the ref to child component, it exposes the entire instance of the child component. With useImperativeHandle, you can specify exactly which methods or properties the parent should have access to.


- Customizes the ref exposed to the parent.
- Allows the parent to call specific functions or properties of the child.
- Useful when you want to expose specific methods to the parent without exposing the entire child instance.

Why use useImperativeHandle?
- Without useImperativeHandle, the parent would have direct access to the entire child component's state and DOM, which might expose more than you want.
- useImperativeHandle allows you to provide a controlled, limited API for the parent to interact with, keeping the internal details of the child component encapsulated.

----------------------

# forwardRef in ReactJs

forwardRef is a higher order component in React that allows us to pass a ref from a parent component to a child component, enabling the parent to directly interact with the child’s DOM or instance.

- When to Use forwardRef:
When you want a parent component to have access to a DOM element or instance inside a child component, such as focusing on an input or calling a method on a child.
It's used when you want the child component to expose its DOM to the parent while still maintaining the abstraction of a functional component.