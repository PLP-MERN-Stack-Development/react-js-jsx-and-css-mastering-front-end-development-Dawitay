import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold">Dawit A. W.</Link>
        <nav className="flex items-center gap-4">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-teal-600 font-semibold' : ''}>Home</NavLink>
          <NavLink to="/tasks" className={({isActive}) => isActive ? 'text-teal-600 font-semibold' : ''}>Tasks</NavLink>
          <NavLink to="/posts" className={({isActive}) => isActive ? 'text-teal-600 font-semibold' : ''}>Posts</NavLink>
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  );
}
