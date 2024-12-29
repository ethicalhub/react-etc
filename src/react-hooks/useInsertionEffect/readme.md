# useInsertionEffect hook
It is designed to run before the DOM is painted, making it suitable for operations that need to be inserted into the DOM immediately after render but before the browser commits the render to the screen.

This makes useInsertionEffect useful for tasks like injecting critical CSS (e.g., styling or themes) before the browser paints the screen, which can help in preventing layout shifts or flickers.


- Use useInsertionEffect if you need to apply critical CSS or styles (like theme switching or adding dynamic CSS) before the browser paints the screen. This can help prevent visible flickering and layout shifts, especially in modern applications where style consistency is important.
- Use useLayoutEffect if you need to read or manipulate the layout (e.g., measuring elements, animating components) and want to ensure the browser updates the layout before rendering.

useInsertionEffect ---> useLayoutEffect ---> useEffect