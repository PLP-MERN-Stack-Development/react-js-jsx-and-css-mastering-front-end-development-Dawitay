import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t mt-8">
      <div className="container py-6 text-center text-sm text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} Dawit Ayele Woldesenbet — Electromechanical Engineer & Data Analyst
      </div>
    </footer>
  );
}
