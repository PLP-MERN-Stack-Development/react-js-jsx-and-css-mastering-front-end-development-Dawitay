import React from 'react';

export default function Button({ children, variant = 'primary', ...props }) {
  const base = 'px-4 py-2 rounded font-semibold transition';
  const styles = {
    primary: 'bg-teal-500 hover:bg-teal-600 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
  };
  return (
    <button className={`${base} ${styles[variant] || styles.primary}`} {...props}>
      {children}
    </button>
  );
}
