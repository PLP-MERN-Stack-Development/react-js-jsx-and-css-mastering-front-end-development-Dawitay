import React from 'react';

export default function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="flex gap-2 items-center justify-center mt-4">
      <button
        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        Prev
      </button>
      <span>Page {page} / {totalPages}</span>
      <button
        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}
