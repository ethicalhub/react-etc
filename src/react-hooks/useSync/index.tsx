import  {  useSyncExternalStore } from 'react';

// External store for theme
const themeStore = {
  theme: localStorage.getItem('theme') || 'light', // Default to light mode
  subscribers: new Set<() => void>(),

  // Method to change the theme
  setTheme(theme: string) {
    this.theme = theme;
    localStorage.setItem('theme', theme);
    this.notifySubscribers();
  },

  // Subscribe to theme changes
  subscribe(callback: () => void) {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback); // Unsubscribe function
  },

  // Get the current theme
  getTheme() {
    return this.theme;
  },

  // Notify subscribers about theme changes
  notifySubscribers() {
    this.subscribers.forEach((callback) => callback());
  },
};

// Custom hook to use the external store
function useTheme() {
  return useSyncExternalStore(themeStore.subscribe, themeStore.getTheme);
}

// Main App component
const ThemeSwitcherApp = () => {
  const theme = useTheme(); // Get the current theme

  // Toggle the theme between dark and light
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    themeStore.setTheme(newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <h1>Welcome to the Theme Switcher!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default ThemeSwitcherApp;
