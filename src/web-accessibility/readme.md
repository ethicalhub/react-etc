# What is web accessibility?
- Web accessibility refers to the practice of designing and developing websites, tools, and technologies so that they can be used by everyone, including people with disabilities. It ensures that all users, regardless of their physical, cognitive, or technical limitations, can perceive, understand, navigate, and interact with the web effectively.


Key Principles of Web Accessibility (POUR):
- Perceivable
- Operable
- Understandable
- Robust


# Tab Index
It is a global HTML attribute that determines the tab order of elements on a web page. It defines how elements are navigated when a user presses the Tab key. 

- tabIndex="0"
The element is focusable and is included in the natural tab order.

- tabIndex="-1"
The element is focusable, but it is not included in the tab order.

- tabIndex="1", tabIndex="2", etc.

    - Positive values define an explicit tab order.
    - Elements with positive tabIndex values are navigated before elements with a tabIndex of 0 or no tabIndex (natural tab order).
    - Higher numbers are navigated later. 
    - This approach is generally discouraged as it can lead to unexpected tabbing behavior and make the interface confusing.

<div tabindex="2">Second in tab order</div>
<div tabindex="1">First in tab order</div>

- Interactive elements (e.g., <button>, <a href>, <input>) are focusable and follow the natural tab order.

<div>
  <button>Button 1</button>
  <button>Button 2</button>
  <div tabindex="0">Focusable Div</div>
  <a href="#">Link</a>
</div>



# Color contrast
- better user experience
- people with low vision
- wcag compliances

https://webaim.org/resources/contrastchecker/


# Use proper Semantics tag
- use h1 tag only
add more lines


# ARIA Tag
- Should we use it?

Warning: Many of these widgets are fully supported in modern browsers. Developers should prefer using the correct semantic HTML element over using ARIA, if such an element exists. For instance, native elements have built-in keyboard accessibility, roles and states. However, if you choose to use ARIA, you are responsible for mimicking the equivalent browser behavior in script.


https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA