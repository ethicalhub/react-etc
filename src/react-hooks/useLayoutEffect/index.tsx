import React, { useState, useLayoutEffect, useRef } from 'react';

const LayoutEffectExample = () => {
  const [width, setWidth] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setWidth(boxRef.current.offsetWidth);
    }
  }, []); 

  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: '50%',
          height: '100px',
          backgroundColor: isDarkMode ? 'darkslategray' : 'lightblue',
        }}
      >
        Resize the window to see changes
      </div>
      <p>Box width: {width}px</p>
      <button onClick={toggleTheme}>
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default LayoutEffectExample;
