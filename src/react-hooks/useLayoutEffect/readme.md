# UseLayoutEffects hook
It runs synchronously after all DOM mutations but before the browser has painted the updates to the screen. This ensures that the effect is executed right after the DOM is updated and before the user sees any visual changes. This can be useful for situations where you need to measure the layout or perform actions that affect the DOM, but you want to make sure that everything is ready for the user.


It's useful, if we want to avoid flickers, where changes are made to the DOM and then updated visually.
- It block the browser from painting, until it finishes which may hurt the performance of our applicatino