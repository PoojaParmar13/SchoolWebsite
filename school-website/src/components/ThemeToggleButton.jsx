import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme} 
      className="text-black dark:text-white text-xl px-4 py-2 rounded border border-black dark:border-white"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '🌞'}
    </button>
  );
};

export default ThemeToggleButton;
