import {useState, useInsertionEffect } from 'react'

const InsertionEffectHook = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useInsertionEffect(() => {
      if (isDarkMode) {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
      } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
      }
    }, [isDarkMode]);
  
    return (
      <div>
        <button onClick={() => setIsDarkMode(prev => !prev)}>
          Toggle Dark Mode
        </button>
      </div>
    );
}

export default InsertionEffectHook